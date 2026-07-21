window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/2bf0cf35f82f2edd034572262ee79c60edbb8c40/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/2bf0cf35f82f2edd034572262ee79c60edbb8c40/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
