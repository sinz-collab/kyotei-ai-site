window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/25f56c6df362620270001322885cfbb6786a6137/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/25f56c6df362620270001322885cfbb6786a6137/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
