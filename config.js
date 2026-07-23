window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/ab63d37c880c8a11ff53b0b2177ac0534511e074/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/ab63d37c880c8a11ff53b0b2177ac0534511e074/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
