window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/120759852d82476b3c7ef8329de7fc87058e710e/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/120759852d82476b3c7ef8329de7fc87058e710e/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
