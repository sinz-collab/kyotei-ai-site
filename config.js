window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/b6db6671504b3242966673871ae4e442bc1f1c46/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/b6db6671504b3242966673871ae4e442bc1f1c46/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
