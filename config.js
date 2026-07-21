window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/5865bf086b392fc145af57594f3f65aa1e403bf2/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/5865bf086b392fc145af57594f3f65aa1e403bf2/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
