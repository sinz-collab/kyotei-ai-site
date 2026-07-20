window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/7bfcc6ffe60b4f865067905248ea9bab9bce09fb/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/7bfcc6ffe60b4f865067905248ea9bab9bce09fb/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
