//
var flagminMaxAvg = 1;
var jsonstr = '{"Table":[{"Id":1,"MachineId":1,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40001","TagName":"当前温度","MaxScale":100.0000,"MinScale":0.0000,"Scale":"摄氏度℃","DeviceName":"GKJ.GJKDevice.40001","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":2,"MachineId":1,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40002","TagName":"上侧压力","MaxScale":100.0000,"MinScale":0.0000,"Scale":"公斤(kg)","DeviceName":"GKJ.GJKDevice.40002","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":3,"MachineId":1,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40003","TagName":"左侧压力","MaxScale":100.0000,"MinScale":0.0000,"Scale":"公斤(kg)","DeviceName":"GKJ.GJKDevice.40003","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":4,"MachineId":1,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40004","TagName":"右侧压力","MaxScale":100.0000,"MinScale":0.0000,"Scale":"公斤(kg)","DeviceName":"GKJ.GJKDevice.40004","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":5,"MachineId":1,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40005","TagName":"下侧压力","MaxScale":100.0000,"MinScale":0.0000,"Scale":"公斤(kg)","DeviceName":"GKJ.GJKDevice.40005","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":6,"MachineId":1,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40006","TagName":"前部扭力","MaxScale":100.0000,"MinScale":0.0000,"Scale":"公斤(kg)","DeviceName":"GKJ.GJKDevice.40006","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":7,"MachineId":1,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40007","TagName":"后部扭力","MaxScale":100.0000,"MinScale":0.0000,"Scale":"公斤(kg)","DeviceName":"GKJ.GJKDevice.40007","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":8,"MachineId":1,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40008","TagName":"当前温度","MaxScale":100.0000,"MinScale":0.0000,"Scale":"摄氏度℃","DeviceName":"GKJ.GJKDevice.40008","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":9,"MachineId":1,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40009","TagName":"上侧压力","MaxScale":100.0000,"MinScale":0.0000,"Scale":"公斤(kg)","DeviceName":"GKJ.GJKDevice.40009","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":10,"MachineId":1,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40010","TagName":"左侧压力","MaxScale":100.0000,"MinScale":0.0000,"Scale":"公斤(kg)","DeviceName":"GKJ.GJKDevice.40010","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":11,"MachineId":1,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40011","TagName":"右侧压力","MaxScale":100.0000,"MinScale":0.0000,"Scale":"公斤(kg)","DeviceName":"GKJ.GJKDevice.40011","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":12,"MachineId":1,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40012","TagName":"下侧压力","MaxScale":100.0000,"MinScale":0.0000,"Scale":"公斤(kg)","DeviceName":"GKJ.GJKDevice.40012","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":13,"MachineId":1,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40007","TagName":"前部扭力","MaxScale":100.0000,"MinScale":0.0000,"Scale":"公斤(kg)","DeviceName":"GKJ.GJKDevice.40007","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":14,"MachineId":1,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40008","TagName":"后部扭力","MaxScale":100.0000,"MinScale":0.0000,"Scale":"公斤(kg)","DeviceName":"GKJ.GJKDevice.40008","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":15,"MachineId":1,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40009","TagName":"实时温度","MaxScale":100.0000,"MinScale":0.0000,"Scale":"摄氏度℃","DeviceName":"GKJ.GJKDevice.40009","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":16,"MachineId":1,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40101","TagName":"实时压力","MaxScale":100.0000,"MinScale":0.0000,"Scale":"公斤(kg)","DeviceName":"GKJ.GJKDevice.40101","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":17,"MachineId":1,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40102","TagName":"实时压力","MaxScale":100.0000,"MinScale":0.0000,"Scale":"公斤(kg)","DeviceName":"GKJ.GJKDevice.40102","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":18,"MachineId":1,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40103","TagName":"实时扭力","MaxScale":100.0000,"MinScale":0.0000,"Scale":"公斤(kg)","DeviceName":"GKJ.GJKDevice.40103","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":19,"MachineId":1,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40104","TagName":"实时扭力","MaxScale":100.0000,"MinScale":0.0000,"Scale":"公斤(kg)","DeviceName":"GKJ.GJKDevice.40104","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":20,"MachineId":1,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40020","TagName":"前部承重","MaxScale":100.0000,"MinScale":0.0000,"Scale":"公斤(kg)","DeviceName":"GKJ.GJKDevice.40020","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":21,"MachineId":1,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40021","TagName":"前部承重","MaxScale":100.0000,"MinScale":0.0000,"Scale":"公斤(kg)","DeviceName":"GKJ.GJKDevice.40021","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":22,"MachineId":1,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40022","TagName":"后部承重","MaxScale":100.0000,"MinScale":0.0000,"Scale":"公斤(kg)","DeviceName":"GKJ.GJKDevice.40022","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":23,"MachineId":1,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40023","TagName":"后部承重","MaxScale":100.0000,"MinScale":0.0000,"Scale":"公斤(kg)","DeviceName":"GKJ.GJKDevice.40023","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":47,"MachineId":4,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40047","TagName":"当前温度","MaxScale":100.0000,"MinScale":0.0000,"Scale":"摄氏度℃","DeviceName":"GKJ.GJKDevice.40047","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":48,"MachineId":4,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40048","TagName":"上侧压力","MaxScale":100.0000,"MinScale":0.0000,"Scale":"公斤(kg)","DeviceName":"GKJ.GJKDevice.40048","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":49,"MachineId":4,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40049","TagName":"左侧压力","MaxScale":100.0000,"MinScale":0.0000,"Scale":"公斤(kg)","DeviceName":"GKJ.GJKDevice.40049","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":50,"MachineId":4,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40050","TagName":"右侧压力","MaxScale":100.0000,"MinScale":0.0000,"Scale":"公斤(kg)","DeviceName":"GKJ.GJKDevice.40050","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":51,"MachineId":4,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40051","TagName":"下侧压力","MaxScale":100.0000,"MinScale":0.0000,"Scale":"公斤(kg)","DeviceName":"GKJ.GJKDevice.40051","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":52,"MachineId":4,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40052","TagName":"前部扭力","MaxScale":100.0000,"MinScale":0.0000,"Scale":"公斤(kg)","DeviceName":"GKJ.GJKDevice.40052","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":53,"MachineId":4,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40053","TagName":"后部扭力","MaxScale":100.0000,"MinScale":0.0000,"Scale":"公斤(kg)","DeviceName":"GKJ.GJKDevice.40053","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":54,"MachineId":4,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40054","TagName":"当前温度","MaxScale":100.0000,"MinScale":0.0000,"Scale":"摄氏度℃","DeviceName":"GKJ.GJKDevice.40054","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":55,"MachineId":4,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40055","TagName":"上侧压力","MaxScale":100.0000,"MinScale":0.0000,"Scale":"公斤(kg)","DeviceName":"GKJ.GJKDevice.40055","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":56,"MachineId":4,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40056","TagName":"左侧压力","MaxScale":100.0000,"MinScale":0.0000,"Scale":"公斤(kg)","DeviceName":"GKJ.GJKDevice.40056","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":57,"MachineId":4,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40057","TagName":"右侧压力","MaxScale":100.0000,"MinScale":0.0000,"Scale":"公斤(kg)","DeviceName":"GKJ.GJKDevice.40057","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":58,"MachineId":4,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40058","TagName":"下侧压力","MaxScale":100.0000,"MinScale":0.0000,"Scale":"公斤(kg)","DeviceName":"GKJ.GJKDevice.40058","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":59,"MachineId":4,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40059","TagName":"前部扭力","MaxScale":100.0000,"MinScale":0.0000,"Scale":"公斤(kg)","DeviceName":"GKJ.GJKDevice.40059","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":60,"MachineId":4,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40060","TagName":"后部扭力","MaxScale":100.0000,"MinScale":0.0000,"Scale":"公斤(kg)","DeviceName":"GKJ.GJKDevice.40060","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":61,"MachineId":4,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40061","TagName":"实时温度","MaxScale":100.0000,"MinScale":0.0000,"Scale":"摄氏度℃","DeviceName":"GKJ.GJKDevice.40061","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":62,"MachineId":4,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40062","TagName":"实时压力","MaxScale":100.0000,"MinScale":0.0000,"Scale":"公斤(kg)","DeviceName":"GKJ.GJKDevice.40062","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":63,"MachineId":4,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40063","TagName":"实时压力","MaxScale":100.0000,"MinScale":0.0000,"Scale":"公斤(kg)","DeviceName":"GKJ.GJKDevice.40063","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":64,"MachineId":4,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40064","TagName":"实时扭力","MaxScale":100.0000,"MinScale":0.0000,"Scale":"公斤(kg)","DeviceName":"GKJ.GJKDevice.40064","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":65,"MachineId":4,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40065","TagName":"实时扭力","MaxScale":100.0000,"MinScale":0.0000,"Scale":"公斤(kg)","DeviceName":"GKJ.GJKDevice.40065","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":66,"MachineId":4,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40066","TagName":"前部承重","MaxScale":100.0000,"MinScale":0.0000,"Scale":"公斤(kg)","DeviceName":"GKJ.GJKDevice.40066","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":67,"MachineId":4,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40067","TagName":"前部承重","MaxScale":100.0000,"MinScale":0.0000,"Scale":"公斤(kg)","DeviceName":"GKJ.GJKDevice.40067","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":68,"MachineId":4,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40068","TagName":"后部承重","MaxScale":100.0000,"MinScale":0.0000,"Scale":"公斤(kg)","DeviceName":"GKJ.GJKDevice.40068","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":69,"MachineId":4,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40069","TagName":"后部承重","MaxScale":100.0000,"MinScale":0.0000,"Scale":"公斤(kg)","DeviceName":"GKJ.GJKDevice.40069","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":70,"MachineId":5,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40070","TagName":"当前温度","MaxScale":100.0000,"MinScale":0.0000,"Scale":"摄氏度℃","DeviceName":"GKJ.GJKDevice.40070","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":71,"MachineId":5,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40071","TagName":"上侧压力","MaxScale":100.0000,"MinScale":0.0000,"Scale":"公斤(kg)","DeviceName":"GKJ.GJKDevice.40071","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":72,"MachineId":5,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40072","TagName":"左侧压力","MaxScale":100.0000,"MinScale":0.0000,"Scale":"公斤(kg)","DeviceName":"GKJ.GJKDevice.40072","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":73,"MachineId":5,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40073","TagName":"右侧压力","MaxScale":100.0000,"MinScale":0.0000,"Scale":"公斤(kg)","DeviceName":"GKJ.GJKDevice.40073","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":74,"MachineId":5,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40074","TagName":"下侧压力","MaxScale":100.0000,"MinScale":0.0000,"Scale":"公斤(kg)","DeviceName":"GKJ.GJKDevice.40074","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":75,"MachineId":5,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40075","TagName":"前部扭力","MaxScale":100.0000,"MinScale":0.0000,"Scale":"公斤(kg)","DeviceName":"GKJ.GJKDevice.40075","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":76,"MachineId":5,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40076","TagName":"后部扭力","MaxScale":100.0000,"MinScale":0.0000,"Scale":"公斤(kg)","DeviceName":"GKJ.GJKDevice.40076","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":77,"MachineId":5,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40077","TagName":"当前温度","MaxScale":100.0000,"MinScale":0.0000,"Scale":"摄氏度℃","DeviceName":"GKJ.GJKDevice.40077","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":78,"MachineId":5,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40078","TagName":"上侧压力","MaxScale":100.0000,"MinScale":0.0000,"Scale":"公斤(kg)","DeviceName":"GKJ.GJKDevice.40078","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":79,"MachineId":5,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40079","TagName":"左侧压力","MaxScale":100.0000,"MinScale":0.0000,"Scale":"公斤(kg)","DeviceName":"GKJ.GJKDevice.40079","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":80,"MachineId":5,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40080","TagName":"右侧压力","MaxScale":100.0000,"MinScale":0.0000,"Scale":"公斤(kg)","DeviceName":"GKJ.GJKDevice.40080","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":81,"MachineId":5,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40081","TagName":"下侧压力","MaxScale":100.0000,"MinScale":0.0000,"Scale":"公斤(kg)","DeviceName":"GKJ.GJKDevice.40081","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":82,"MachineId":5,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40082","TagName":"前部扭力","MaxScale":100.0000,"MinScale":0.0000,"Scale":"公斤(kg)","DeviceName":"GKJ.GJKDevice.40082","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":83,"MachineId":5,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40083","TagName":"后部扭力","MaxScale":100.0000,"MinScale":0.0000,"Scale":"公斤(kg)","DeviceName":"GKJ.GJKDevice.40083","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":84,"MachineId":5,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40084","TagName":"实时温度","MaxScale":100.0000,"MinScale":0.0000,"Scale":"摄氏度℃","DeviceName":"GKJ.GJKDevice.40084","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":85,"MachineId":5,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40085","TagName":"实时压力","MaxScale":100.0000,"MinScale":0.0000,"Scale":"公斤(kg)","DeviceName":"GKJ.GJKDevice.40085","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":86,"MachineId":5,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40086","TagName":"实时压力","MaxScale":100.0000,"MinScale":0.0000,"Scale":"公斤(kg)","DeviceName":"GKJ.GJKDevice.40086","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":87,"MachineId":5,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40087","TagName":"实时扭力","MaxScale":100.0000,"MinScale":0.0000,"Scale":"公斤(kg)","DeviceName":"GKJ.GJKDevice.40087","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":88,"MachineId":5,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40088","TagName":"实时扭力","MaxScale":100.0000,"MinScale":0.0000,"Scale":"公斤(kg)","DeviceName":"GKJ.GJKDevice.40088","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":89,"MachineId":5,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40089","TagName":"前部承重","MaxScale":100.0000,"MinScale":0.0000,"Scale":"公斤(kg)","DeviceName":"GKJ.GJKDevice.40089","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":90,"MachineId":5,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40090","TagName":"前部承重","MaxScale":100.0000,"MinScale":0.0000,"Scale":"公斤(kg)","DeviceName":"GKJ.GJKDevice.40090","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":91,"MachineId":5,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40091","TagName":"后部承重","MaxScale":100.0000,"MinScale":0.0000,"Scale":"公斤(kg)","DeviceName":"GKJ.GJKDevice.40091","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":92,"MachineId":5,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40092","TagName":"后部承重","MaxScale":100.0000,"MinScale":0.0000,"Scale":"公斤(kg)","DeviceName":"GKJ.GJKDevice.40092","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":93,"MachineId":6,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40093","TagName":"当前温度","MaxScale":100.0000,"MinScale":0.0000,"Scale":"摄氏度℃","DeviceName":"GKJ.GJKDevice.40093","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":94,"MachineId":6,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40094","TagName":"上侧压力","MaxScale":100.0000,"MinScale":0.0000,"Scale":"公斤(kg)","DeviceName":"GKJ.GJKDevice.40094","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":95,"MachineId":6,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40095","TagName":"左侧压力","MaxScale":100.0000,"MinScale":0.0000,"Scale":"公斤(kg)","DeviceName":"GKJ.GJKDevice.40095","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":96,"MachineId":6,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40096","TagName":"右侧压力","MaxScale":100.0000,"MinScale":0.0000,"Scale":"公斤(kg)","DeviceName":"GKJ.GJKDevice.40096","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":97,"MachineId":6,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40097","TagName":"下侧压力","MaxScale":100.0000,"MinScale":0.0000,"Scale":"公斤(kg)","DeviceName":"GKJ.GJKDevice.40097","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":98,"MachineId":6,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40098","TagName":"前部扭力","MaxScale":100.0000,"MinScale":0.0000,"Scale":"公斤(kg)","DeviceName":"GKJ.GJKDevice.40098","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":99,"MachineId":6,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40099","TagName":"后部扭力","MaxScale":100.0000,"MinScale":0.0000,"Scale":"公斤(kg)","DeviceName":"GKJ.GJKDevice.40099","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":100,"MachineId":6,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40100","TagName":"当前温度","MaxScale":100.0000,"MinScale":0.0000,"Scale":"摄氏度℃","DeviceName":"GKJ.GJKDevice.40100","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":101,"MachineId":6,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40101","TagName":"上侧压力","MaxScale":100.0000,"MinScale":0.0000,"Scale":"公斤(kg)","DeviceName":"GKJ.GJKDevice.40101","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":102,"MachineId":6,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40102","TagName":"左侧压力","MaxScale":100.0000,"MinScale":0.0000,"Scale":"公斤(kg)","DeviceName":"GKJ.GJKDevice.40102","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":103,"MachineId":6,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40103","TagName":"右侧压力","MaxScale":100.0000,"MinScale":0.0000,"Scale":"公斤(kg)","DeviceName":"GKJ.GJKDevice.40103","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":104,"MachineId":6,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40104","TagName":"下侧压力","MaxScale":100.0000,"MinScale":0.0000,"Scale":"公斤(kg)","DeviceName":"GKJ.GJKDevice.40104","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":105,"MachineId":6,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40105","TagName":"前部扭力","MaxScale":100.0000,"MinScale":0.0000,"Scale":"公斤(kg)","DeviceName":"GKJ.GJKDevice.40105","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":106,"MachineId":6,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40106","TagName":"后部扭力","MaxScale":100.0000,"MinScale":0.0000,"Scale":"公斤(kg)","DeviceName":"GKJ.GJKDevice.40106","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":107,"MachineId":6,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40107","TagName":"实时温度","MaxScale":100.0000,"MinScale":0.0000,"Scale":"摄氏度℃","DeviceName":"GKJ.GJKDevice.40107","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":108,"MachineId":6,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40108","TagName":"实时压力","MaxScale":100.0000,"MinScale":0.0000,"Scale":"公斤(kg)","DeviceName":"GKJ.GJKDevice.40108","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":109,"MachineId":6,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40109","TagName":"实时压力","MaxScale":100.0000,"MinScale":0.0000,"Scale":"公斤(kg)","DeviceName":"GKJ.GJKDevice.40109","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":110,"MachineId":6,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40110","TagName":"实时扭力","MaxScale":100.0000,"MinScale":0.0000,"Scale":"公斤(kg)","DeviceName":"GKJ.GJKDevice.40110","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":111,"MachineId":6,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40111","TagName":"实时扭力","MaxScale":100.0000,"MinScale":0.0000,"Scale":"公斤(kg)","DeviceName":"GKJ.GJKDevice.40111","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":112,"MachineId":6,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40112","TagName":"前部承重","MaxScale":100.0000,"MinScale":0.0000,"Scale":"公斤(kg)","DeviceName":"GKJ.GJKDevice.40112","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":113,"MachineId":6,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40113","TagName":"前部承重","MaxScale":100.0000,"MinScale":0.0000,"Scale":"公斤(kg)","DeviceName":"GKJ.GJKDevice.40113","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":114,"MachineId":6,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40114","TagName":"后部承重","MaxScale":100.0000,"MinScale":0.0000,"Scale":"公斤(kg)","DeviceName":"GKJ.GJKDevice.40114","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":115,"MachineId":6,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40115","TagName":"后部承重","MaxScale":100.0000,"MinScale":0.0000,"Scale":"公斤(kg)","DeviceName":"GKJ.GJKDevice.40115","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":116,"MachineId":7,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40116","TagName":"当前温度","MaxScale":100.0000,"MinScale":0.0000,"Scale":"摄氏度℃","DeviceName":"GKJ.GJKDevice.40116","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":117,"MachineId":7,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40117","TagName":"上侧压力","MaxScale":100.0000,"MinScale":0.0000,"Scale":"公斤(kg)","DeviceName":"GKJ.GJKDevice.40117","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":118,"MachineId":7,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40118","TagName":"左侧压力","MaxScale":100.0000,"MinScale":0.0000,"Scale":"公斤(kg)","DeviceName":"GKJ.GJKDevice.40118","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":119,"MachineId":7,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40119","TagName":"右侧压力","MaxScale":100.0000,"MinScale":0.0000,"Scale":"公斤(kg)","DeviceName":"GKJ.GJKDevice.40119","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":120,"MachineId":7,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40120","TagName":"下侧压力","MaxScale":100.0000,"MinScale":0.0000,"Scale":"公斤(kg)","DeviceName":"GKJ.GJKDevice.40120","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":121,"MachineId":7,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40121","TagName":"前部扭力","MaxScale":100.0000,"MinScale":0.0000,"Scale":"公斤(kg)","DeviceName":"GKJ.GJKDevice.40121","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":122,"MachineId":7,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40122","TagName":"后部扭力","MaxScale":100.0000,"MinScale":0.0000,"Scale":"公斤(kg)","DeviceName":"GKJ.GJKDevice.40122","ServerAddress":"KEPware.KEPServerEx.V4"},{"Id":123,"MachineId":7,"TagKey":"tcp://127.0.0.1:8081/IODriver/GKJ.GJKDevice.40123","TagName":"当前温度","MaxScale":100.0000,"MinScale":0.0000,"Scale":"摄氏度℃","DeviceName":"GKJ.GJKDevice.40123","ServerAddress":"KEPware.KEPServerEx.V4"}]}';
		var jsonobj = $.parseJSON(jsonstr);
		//生成模拟数据 start
		var data = [];
		initAnalogData();
		function initAnalogData() {
		    var timeArr = []; var sm = 8; var sd = 1; var ssd; var ssm;var timeDay;
		    for (var j = 0; j < 31; j++) {
		        if (sd > 31) {
		            sd = 1;
		            sm = sm + 1;
		        }
		        ssd = String(sd);
		        if (ssd.length < 2) {
		            ssd = "0" + ssd;
		        }
		        ssm = String(sm);
		        if (ssm.length < 2) {
                    ssm="0"+ssm
		        }
		        sd++;
		        timeDay = "2016-" + ssm + "-" + ssd;
		        timeArr.push(timeDay);
		    }
		    var flag = 0;
		    var cunzhuangArr = ["大张庄", "小李庄", "汪沟村", "蒋头村", "桑园", "新庄", "白寨村", "赵家庄", "史家庄", "后狮村"];
		    for (var i = 0; i < 31; i++) {
		        var data_obj = {};
		        if (flag >= cunzhuangArr.length) {
		            flag = 0;
		        }
		        data_obj["id"] = i + 1;
		        data_obj["time"] = timeArr[i];
		        data_obj["name"] = cunzhuangArr[flag];
		        flag++;

		        data_obj["yl"] = (Math.random() * 50).toFixed(1);
		        data_obj["kqwd"] = (Math.random() * 50).toFixed(1);
		        data_obj["kqsd"] = (Math.random() * 50).toFixed(1);
		        data_obj["dqy"] = (Math.random() * 50).toFixed(1);
		        data_obj["fs"] = (Math.random() * 50).toFixed(1);
		        data_obj["fx"] = "东南";
		        //if ((Math.random() * 100) > 50) {
		        //    data_obj["trwd"] = (Math.random() * 50).toFixed(1);
		        //    data_obj["trsd"] = (Math.random() * 50).toFixed(1);
		        //}
		        if (i % 2 == 0) {
		            data_obj["trwd"] = (Math.random() * 50).toFixed(1);
		            data_obj["trsd"] = (Math.random() * 50).toFixed(1);
		        }
		        data.push(data_obj);
		    }
		}
		
		//生成模拟数据 end
		var dataUnit = {
		    yl: "&nbsp;mm",
		    kqwd: "&nbsp;℃",
		    kqsd: "&nbsp;%",
		    dqy: "&nbsp;P",
		    fs: "&nbsp;km/h",
		    trwd: "&nbsp;%",
		    trsd: "&nbsp;%"
		};
		var dataZh = {
		    yl: "雨量",
		    kqwd: "空气温度",
		    kqsd: "空气湿度",
		    dqy: "大气压",
		    fs: "风速",
		    fx: "风向",
		    trwd: "土壤温度",
		    trsd: "土壤湿度"
		};
		//dataValuePlus(data, dataUnit);
		function dataValuePlus(arr, obj) {
		    //obj和obj[j]是要附加的信息；
		    for (var i = 0; i < arr.length; i++) {
		        for (var j in arr[i]) {
		            if (typeof (arr[i][j]) == "string") {
		                if (obj[j]) {
		                    arr[i][j] = arr[i][j] + obj[j];
		                }
		            }
		        }
		    }
		}//dataValuePlus
			
			var tableArr = jsonobj.Table;
//把数据类型转换为数字 start
			var fieldNumber = ["dqy", "fs", "id", "kqsd", "kqwd", "trsd", "trwd", "yl"];
			fieldToNumber(data, fieldNumber);
			//fieldToNumber start a==arrObjData   b==fieldNumber
			function fieldToNumber(a, b) {
			    $.each(a, function (index, item) {
			        $.each(item, function (key, value) {
			            $.each(b, function (index_1, item_1) {
			                if (key == item_1) {
			                    a[index][key] = parseFloat(a[index][key]);
			                }
			            });
			        });
			    });
			}//fieldToNumber
//把数据类型转换为数字 end
//加上最大值，最小值，平均值
			
			tableArr = data;
			console.log(tableArr);
			$(document).ready(function () {
			    function cacl(arr, callback) {
			        var ret;
			        for (var i = 0; i < arr.length; i++) {
			            ret = callback(arr[i], ret);
			        }
			        return ret;
			    }

			    Array.prototype.max = function () {
			        return cacl(this, function (item, max) {
			            if (!(max > item)) {
			                return item;
			            }
			            else {
			                return max;
			            }
			        });
			    };
			    Array.prototype.min = function () {
			        return cacl(this, function (item, min) {
			            if (!(min < item)) {
			                return item;
			            }
			            else {
			                return min;
			            }
			        });
			    };
			    Array.prototype.sum = function () {
			        return cacl(this, function (item, sum) {
			            if (typeof (sum) == 'undefined') {
			                return item;
			            }
			            else {
			                return sum += item;
			            }
			        });
			    };
			    Array.prototype.avg = function () {
			        if (this.length == 0) {
			            return 0;
			        }
			        return this.sum(this) / this.length;
			    };

			    //
			    Tongji();
			 
			    function Tongji() {
			        var aData = tableArr;
			        var numberField = ["yl", "kqwd", "kqsd", "dqy", "fs"];//要计算的字段
			        var arr0 = [], arr1 = [], arr2 = [], arr3 = [], arr4 = [], arr5 = [], arr6 = [], arr7 = [];//要计算的字段
			        $.each(aData, function (index, item) {
			            $.each(item, function (key, value) {
			                $.each(numberField, function (index_1, item_1) {
			                    if (key == item_1) {
			                        if (index_1 == 0) {
			                            arr0.push(aData[index][key]);
			                        }
			                        if (index_1 == 1) {
			                            arr1.push(aData[index][key]);
			                        }
			                        if (index_1 == 2) {
			                            arr2.push(aData[index][key]);
			                        }
			                        if (index_1 == 3) {
			                            arr3.push(aData[index][key]);
			                        }
			                        if (index_1 == 4) {
			                            arr4.push(aData[index][key]);
			                        }
			                        //if (index_1 == 5) {
			                        //    arr5.push(aData[index][key]);
			                        //}
			                        //if (index_1 == 6) {
			                        //    arr6.push(aData[index][key]);
			                        //}
			                        //if (index_1 == 7) {
			                        //    arr7.push(aData[index][key]);
			                        //}
			                    }
			                });
			            });
			        });
			        var arr__3 = [{
			            id: "",
			            time: "最小值",
			            name: "",
			            yl: (arr0.min()).toFixed(2),
			            kqwd: (arr1.min()).toFixed(2),
			            kqsd: (arr2.min()).toFixed(2),
			            dqy: (arr3.min()).toFixed(2),
			            fs: (arr4.min()).toFixed(2),
			            fx: "",
			        }, {
			            id: "",
			            time: "最大值",
			            name: "",
			            yl: (arr0.max()).toFixed(2),
			            kqwd: (arr1.max()).toFixed(2),
			            kqsd: (arr2.max()).toFixed(2),
			            dqy: (arr3.max()).toFixed(2),
			            fs: (arr4.max()).toFixed(2),
			            fx: "",
			        }, {
			            id: "",
			            time: "平均值",
			            name: "",
			            yl: (arr0.avg()).toFixed(2),
			            kqwd: (arr1.avg()).toFixed(2),
			            kqsd: (arr2.avg()).toFixed(2),
			            dqy: (arr3.avg()).toFixed(2),
			            fs: (arr4.avg()).toFixed(2),
			            fx: "",
			        }];
			        tableArr=tableArr.concat(arr__3);
			    }//
			    
			   
			   
			});//ready
			$(document).ready(function () {
			   
				$('#example').dataTable({
					//"ajax": "data/objects.txt",
				    "data": tableArr,
                    "order":false,
					"columns": [{
					    "data": "id",
					    "title": "ID"
					}, {
					    "data": "time",
					    "title": "日期"
					}, {
					    "data": "yl",
					    "title": "雨量"
					}, {
					    "data": "kqwd",
					    "title": "空气温度"
					}, {
					    "data": "kqsd",
					    "title": "空气湿度"
					}, {
					    "data": "dqy",
					    "title": "大气压"
					}, {
					    "data": "fs",
					    "title": "风速"
					}, {
					    "data": "fx",
					    "title": "风向"
					}],
					"language": {

						"sProcessing": "处理中...",
						"sZeroRecords": "没有匹配结果",
						"sInfoPostFix": "",

						"sSearch": "搜索:",

						"sUrl": "",

						"sEmptyTable": "表中数据为空",

						"sLoadingRecords": "载入中...",

						"sInfoThousands": ",",
						"lengthMenu": "每页 _MENU_ 条记录",
						"zeroRecords": "没有找到记录",
						"info": "第 _PAGE_ 页 ( 总共 _PAGES_ 页 )",
						"infoEmpty": "无记录",
						"infoFiltered": "(从 _MAX_ 条记录过滤)",

						"oPaginate": {

							"sFirst": "首页",

							"sPrevious": "上页",

							"sNext": "下页",

							"sLast": "末页"

						},

						"oAria": {

							"sSortAscending": ":以升序排列此列",

							"sSortDescending": ":以降序排列此列"

						}

					},
					//"bStateSave": true,
					//"sScrollX": "100%",
					"scrollY": true,
       				"scrollX": true,
					//"bScrollCollapse": true,
       				"iDisplayLength": 10,
       				"aLengthMenu": [10, 25, 50, -1],
					// "pageLength":31,
					"bLengthChange": true,
					"pagingType":   "full_numbers",
					dom: '<"toolbar">Bfrtip',
				    //dom: 'B<"toolbar">frtip',
					buttons: [{
						extend: 'excelHtml5',
						text: '<span class="glyphicon glyphicon-export" style="color:#3AF"></span>&nbsp;<span style="color:blue;">Excel</span>',
						customize: function(xlsx) {
							var sheet = xlsx.xl.worksheets['sheet1.xml'];
						}
					}, {
						extend: 'csv',
						text: '<span class="glyphicon glyphicon-export" style="color:#3AF"></span>&nbsp;<span style="color:blue;">CSV</span>',
						exportOptions: {
						    modifier: {
						        search: 'none'
						    }
						}
					}]
				}); //dataTables
				var toolbarHtml=['<div class="input-group" style="">',
'			  <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"  style="color:#1589ed;"></span></span>',
'			  <input id="startTime" type="text" class="form-control" placeholder="Username" aria-describedby="basic-addon1">',
'			  <span class="input-group-addon" style="background: white;font-weight:bold;">到</span>',
'			  <input id="endTime" type="text" class="form-control" placeholder="Username" aria-describedby="basic-addon1">',
'			  <span class="btn btn-primary input-group-addon" style="font-weight:bold">查询</span>',
'			</div>'].join("");
				$("div.toolbar").html(toolbarHtml);
				
				var currentTime=moment(new Date().getTime()).format("YYYY-MM-DD HH:mm");
				$("#startTime").val(currentTime);
				$("#endTime").val(currentTime);
				$('#startTime').datetimepicker();
				$('#endTime').datetimepicker();
				
				$(".dataTables_filter input").attr({"data-toggle":"tooltip","data-placement":"top","title":"请用空格分隔多个关键词"});
				$(function () { $("[data-toggle='tooltip']").tooltip(); });
				getwindowinnerWidth();
				function getwindowinnerWidth() {
				    var wiw = window.innerWidth;
				    var wih = window.innerHeight;
				    if (wiw < 768) {
				        $(".dt-buttons").css("display","none");
				    }
				}
			}); //$