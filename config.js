window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/72c4342558baebe8001abd1978c7a324ac87d1bd/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/72c4342558baebe8001abd1978c7a324ac87d1bd/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
