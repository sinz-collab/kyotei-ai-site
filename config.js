window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/0bad8fb47199903f26a43095f1a72d580c7a9534/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/0bad8fb47199903f26a43095f1a72d580c7a9534/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
