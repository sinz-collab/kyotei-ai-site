window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/39d1897b5ba76336ac19fa52dab4794a4c2788a7/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/39d1897b5ba76336ac19fa52dab4794a4c2788a7/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
