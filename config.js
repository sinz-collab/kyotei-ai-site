window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/dc46a1537a6c4da80e2965708f2fcecfaf98913d/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/dc46a1537a6c4da80e2965708f2fcecfaf98913d/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
