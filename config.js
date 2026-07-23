window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/1f12ada107ac0584036d4f987331554aa41697f5/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/1f12ada107ac0584036d4f987331554aa41697f5/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
