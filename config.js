window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/e40da00612be6935a8ba10061a1c9ad4c1ff1427/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/e40da00612be6935a8ba10061a1c9ad4c1ff1427/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
