window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/d3ba8e939f44d29f0ed3dd1adb558587155e7436/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/d3ba8e939f44d29f0ed3dd1adb558587155e7436/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
