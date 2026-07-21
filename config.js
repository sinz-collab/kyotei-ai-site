window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/982d3867e224ba26738bf1bf48d16cc67277ffcb/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/982d3867e224ba26738bf1bf48d16cc67277ffcb/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
