window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/814ca9087e5322835a45f1f18404ffc98f04a854/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/814ca9087e5322835a45f1f18404ffc98f04a854/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
