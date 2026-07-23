window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/c95db9921f4f66728bc36df82e064397b81682a2/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/c95db9921f4f66728bc36df82e064397b81682a2/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
