window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/5db67971455b1e2167a15764a2ebda12889a7425/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/5db67971455b1e2167a15764a2ebda12889a7425/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
