import * as yup from "yup";

// 可以傳入參數作為檢核邏輯或錯誤訊息文字
const strAccountSchema = ({ title } = { title: "" }) =>
  yup.string().test({
    name: "accountSchema", // 檢核名稱 (不重複，套件內部使用)
    exclusive: true, // 如果有相同名稱的檢核時，使用此專用的檢核邏輯
    params: { title }, // 插入錯誤訊息的參數定義
    message: "${title}僅允許輸入小寫英文", // 預設錯誤訊息

    // 檢核邏輯
    // 回傳 true / false 表示是否合法，並使用"預設"錯誤訊息
    // 回傳 createError 表示發生特定錯誤需顯示特定的錯誤訊息
    test: async function isValid(value) {
      const { createError, path } = this;

      // rule01 不得為 admin 字串
      if (value === "admin") {
        return createError({ path, message: `${title}禁止設定為 ${value}` });
      }

      // rule02  須為小寫英文
      return /^[a-z]+$/.test(value);
    },
  });

export { strAccountSchema };
