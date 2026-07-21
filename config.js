window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/3edba7a87f5ab2e221fc42b585da864a3a7045e9/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/3edba7a87f5ab2e221fc42b585da864a3a7045e9/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
