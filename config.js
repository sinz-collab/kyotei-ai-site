window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/abc5212f0faf425922e9faeb003dc44ceb9a9ec4/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/abc5212f0faf425922e9faeb003dc44ceb9a9ec4/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
