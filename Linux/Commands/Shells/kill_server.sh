#!/bin/bash
echo -n "输入端口号:";read -e port;
lsof -iTCP -sTCP:LISTEN -P | grep :${port};
read -p "输入pid:" pid;
kill -9 ${pid};

# 确认执行情况并请示下步动作
if [ $? -eq 0 ]; then
  echo -n "是否重启该服务(y/n)?";read -e choice;
  case ${choice} in
    y|Y|yes|YES)
      rails s -p${port};
    ;;
    *)
      echo -e "工作愉快:)";
    ;;
  esac
else
  echo -n "程序异常退出,停止服务失败,检查pid后重试:(";
fi

