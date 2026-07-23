window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/514e65572f44cbf96deffa2a45fe6762752d3b56/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/514e65572f44cbf96deffa2a45fe6762752d3b56/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
