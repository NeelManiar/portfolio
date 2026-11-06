# Barrier demo deployment

## Files to add
- `app.py` at the repository root
- `requirements.txt` at the repository root

Do not replace the existing `src/policy.py` or `src/gateway.py`.

## Run locally

From the repository root:

```bash
python -m pip install -r requirements.txt
streamlit run app.py
```

## Deploy

1. Push `app.py` and `requirements.txt` to the `main` branch of the Barrier GitHub repository.
2. Create a new app in Streamlit Community Cloud.
3. Select the `NeelManiar/Barrier` repository, `main` branch, and `app.py` as the entrypoint.
4. Deploy. No secrets or API keys are required for this demo.

## Important scope notes

The app calls the repository's existing `src.gateway.execute_action` function.
It uses a deterministic proposed action and a simulated `send_report` tool.
No real report is sent and no external server is contacted.

The demo deliberately fixes the tool arguments and uses trusted demo policy
configuration. It does not resolve the existing gateway's general extra-argument
validation weakness, and it does not independently verify data-domain or
destination-class metadata supplied by arbitrary agents. Do not describe this
demo as production-ready or as proof of prompt-injection resistance.

The separate Gemini integration in `src/llm_agent.py` is not used by this app.
It requires a Gemini API key. Its presence in the repository should not be
described as proof that every API/model configuration works reliably.
