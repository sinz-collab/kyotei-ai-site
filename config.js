window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/e5a2f100a9493afd2ca19dc52036c0c2c62d495e/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/e5a2f100a9493afd2ca19dc52036c0c2c62d495e/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
