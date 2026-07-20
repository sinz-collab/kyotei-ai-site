window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/f0853102ab9df0927b6ebdb1ba7e38fcd12a4056/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/f0853102ab9df0927b6ebdb1ba7e38fcd12a4056/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
