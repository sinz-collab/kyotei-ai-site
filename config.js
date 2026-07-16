window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/471ba2b323cdd912b8ba5058834513e89e93e878/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/471ba2b323cdd912b8ba5058834513e89e93e878/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
