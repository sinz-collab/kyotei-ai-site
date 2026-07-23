window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/1404f720da6e3dc7631a7662c5c0f8f326a31948/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/1404f720da6e3dc7631a7662c5c0f8f326a31948/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
