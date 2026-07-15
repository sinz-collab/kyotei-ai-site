window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/6e2198780060f66e956eab9a7962edf41a1d48b0/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/6e2198780060f66e956eab9a7962edf41a1d48b0/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
