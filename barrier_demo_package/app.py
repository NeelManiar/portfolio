import streamlit as st

from src.gateway import execute_action


# This demo deliberately uses a deterministic proposal instead of an LLM.
# The tool is simulated: it does not send a real report or contact a server.

APPROVED_DESTINATION = "hr-platform.example.com"
UNAPPROVED_DESTINATION = "external-server.example.com"


def send_report(destination, data_domain, destination_class):
    """Simulate sending a report. No network request is made."""
    return f"Simulated report action executed for {destination}"


def run_barrier_demo(destination):
    tools = {
        "send_report": send_report,
    }

    # These permissions are trusted demo configuration, not model-generated.
    authorization = {
        "approved_tools": ["send_report"],
        "approved_recipients": [APPROVED_DESTINATION],
        "approved_data_domains": ["hr"],
        "approved_sink_classes": ["approved_api"],
    }

    action = {
        "tool": "send_report",
        "arguments": {
            "destination": destination,
            "data_domain": "hr",
            "destination_class": "approved_api",
        },
    }

    result = execute_action(action, authorization, tools)
    return result, action, authorization


st.set_page_config(
    page_title="Barrier Playground",
    page_icon="🛡️",
    layout="centered",
)

st.title("🛡️ Barrier")
st.subheader("Agent action authorization playground")
st.caption("Deterministic demo · No API key required · No real data transfer")

st.markdown(
    """
Barrier sits between an AI agent and the tools it wants to use.
The agent may propose an action; Barrier checks that action against
an explicit authorization policy before the tool can execute.
"""
)

with st.container(border=True):
    st.markdown("### Try an agent action")
    scenario = st.radio(
        "Choose a proposed report destination",
        options=[
            APPROVED_DESTINATION,
            UNAPPROVED_DESTINATION,
        ],
        format_func=lambda value: (
            f"Approved destination — {value}"
            if value == APPROVED_DESTINATION
            else f"Unapproved destination — {value}"
        ),
    )

    run_clicked = st.button("Evaluate with Barrier", type="primary", use_container_width=True)

if run_clicked:
    result, action, authorization = run_barrier_demo(scenario)
    allowed = result != "BLOCKED"

    st.divider()
    st.markdown("### Authorization result")

    if allowed:
        st.success("ALLOW — the action passed the configured checks.")
        st.write(result)
    else:
        st.error("BLOCK — the action did not pass authorization.")
        st.write(
            "Reason: the proposed destination is not in the configured "
            "approved-recipient list."
        )

    with st.expander("Inspect the action Barrier evaluated"):
        st.json(action)

    with st.expander("Inspect the demo authorization policy"):
        st.json(authorization)

    st.caption(
        "The gateway and policy are the project's existing Python code. "
        "The report tool is simulated and performs no network operation."
    )

st.divider()
st.markdown("### What this demo proves")
st.markdown(
    """
- The action is passed to Barrier's Python gateway.
- The gateway checks the proposed tool and authorization fields.
- An unapproved destination is blocked before the simulated tool executes.
"""
)

st.markdown("### What this demo does not prove")
st.markdown(
    """
- It does not test prompt-injection resistance.
- It does not inspect report contents.
- It does not validate arbitrary extra tool arguments.
- It does not demonstrate a production-ready security boundary.
"""
)

st.info(
    "API integration: the repository also contains a separate Gemini-connected "
    "agent path that can propose structured tool calls for the gateway. "
    "That path requires a Gemini API key and is not used by this public demo. "
    "The demo itself is deterministic so anyone can try it without credentials."
)

st.caption("Barrier is an experimental research prototype, not a production security product.")
