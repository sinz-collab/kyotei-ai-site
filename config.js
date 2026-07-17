window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/2208a5353f1f7a05595c2c6642d52e5d9dc9d839/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/2208a5353f1f7a05595c2c6642d52e5d9dc9d839/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
