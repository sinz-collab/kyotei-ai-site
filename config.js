window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/89fdaa8a8e3d1e342f9013bfcc4d01c7928ad509/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/89fdaa8a8e3d1e342f9013bfcc4d01c7928ad509/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
