window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/286dcd933e6c34dc90b2b18a4068dcf1fc4c5a5f/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/286dcd933e6c34dc90b2b18a4068dcf1fc4c5a5f/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
