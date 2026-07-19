window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/aa4680669e6668fd0e7afc31279fe253d900a1ac/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/aa4680669e6668fd0e7afc31279fe253d900a1ac/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
