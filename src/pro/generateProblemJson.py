# -*- coding: utf-8 -*
# import xlrd
# import sys
# reload(sys)
# sys.setdefaultencoding( "utf-8" )

# def read_xls(filename):

#     # 打开Excel文件
#     data = xlrd.open_workbook(filename)

#     # 读取第一个工作表
#     table = data.sheets()[0]

#     # 统计行数
#     rows = table.nrows

#     data = []   # 存放数据

#     for v in range(1, rows):
#         values = table.row_values(v)
#         data.append(
#             (
#                 {
#                 "index":str(values[0]),
#                 "title":str(values[1]), # 这里我只需要字符型数据，加了str(),根据实际自己取舍			
#                 "ans":str(values[2]),
#                 }
#             )
#         )

#     return data

# if __name__ == '__main__':

#     d1 = read_xls("./pro.xls")

#     d2 = str(d1).replace("\'", "\"")    # 字典中的数据都是单引号，但是标准的json需要双引号
#     # print(d2)

#     d2 = "{\"DeviceList\":" + d2 + "}"    # 前面的数据只是数组，加上外面的json格式大括号

#     # 可读可写，如果不存在则创建，如果有内容则覆盖
#     jsFile = open("./DevicesInfo.js", "w+")
#     jsFile.write(d2)
#     jsFile.close()

import xlrd
import json
import operator
import io

filename = './pro.xls'
 
def read_xlsx(index):
 writeData = []
 # 打开excel文件
 data1 = xlrd.open_workbook(filename)
 # 读取第一个工作表
 table = data1.sheets()[index]
 # 统计行数
 n_rows = table.nrows
 
 data = []
 
 # 题目属性：index title ans
 for v in range(1, n_rows):
  # 每一行数据形成一个列表
  values = table.row_values(v)
  # 列表形成字典
  data.append({'index': values[0],
      'title': values[1],
      'ans':  values[2],
      })
 writeData.extend(data)
 with open('pro'+str(index+1)+'.json', 'w', encoding='utf-8') as f:
  f.write(json.dumps(writeData, ensure_ascii=False, indent=2))
 
if __name__ == '__main__':
 # 循环打开每个excel表单
 for i in range(0, 11):
    read_xlsx(i)
 