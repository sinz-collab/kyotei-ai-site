window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/47edd9e3d5750dc8310aaa6088bc99c59beb7d4f/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/47edd9e3d5750dc8310aaa6088bc99c59beb7d4f/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
