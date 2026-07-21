window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/d9d28084d5233dfae3a3c97e62b3ef19a788cf51/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/d9d28084d5233dfae3a3c97e62b3ef19a788cf51/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
