window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/b5bd16b89af66da35e0b7c9c90b83160044f393d/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/b5bd16b89af66da35e0b7c9c90b83160044f393d/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
