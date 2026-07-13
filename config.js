window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/bde6bf4e32957e05207900f1e1b10373db0e2cba/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/bde6bf4e32957e05207900f1e1b10373db0e2cba/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
