window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/34319063f04e70d951c24f112efe5f65d46f0ba4/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/34319063f04e70d951c24f112efe5f65d46f0ba4/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
