window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/c0de2c1844dba34dae6e039cf7a2ad80ec5d4932/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/c0de2c1844dba34dae6e039cf7a2ad80ec5d4932/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
