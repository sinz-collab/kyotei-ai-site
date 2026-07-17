window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/0606ba227efc2970bf5f5ea2fa376776909bf7f4/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/0606ba227efc2970bf5f5ea2fa376776909bf7f4/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
