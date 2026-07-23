window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/0f0d55fbb45de10b85e463ee91cc8725279750c8/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/0f0d55fbb45de10b85e463ee91cc8725279750c8/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
