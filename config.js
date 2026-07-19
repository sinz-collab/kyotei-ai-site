window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/3dcee7d2c2c757145849cf647c3d42efeac45d5c/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/3dcee7d2c2c757145849cf647c3d42efeac45d5c/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
