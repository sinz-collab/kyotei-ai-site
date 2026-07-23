window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/2eda77af63a822adc218fe38a0e333f868bdc881/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/2eda77af63a822adc218fe38a0e333f868bdc881/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
