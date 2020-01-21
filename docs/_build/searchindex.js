Search.setIndex({docnames:["components","components/host","components/network","components/protocols","design","examples","examples/QKD","examples/entanglement_routing","examples/send_data","examples/send_epr","index","install","install/linux_mac","install/windows","intro","objects","objects/classical_storage","objects/message","objects/packet","objects/quantum_storage","objects/qubit","objects/routing_packet","quick_start"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,sphinx:56},filenames:["components.rst","components/host.rst","components/network.rst","components/protocols.rst","design.rst","examples.rst","examples/QKD.rst","examples/entanglement_routing.rst","examples/send_data.rst","examples/send_epr.rst","index.rst","install.rst","install/linux_mac.rst","install/windows.rst","intro.rst","objects.rst","objects/classical_storage.rst","objects/message.rst","objects/packet.rst","objects/quantum_storage.rst","objects/qubit.rst","objects/routing_packet.rst","quick_start.rst"],objects:{"components.host":{Host:[1,1,1,""],_get_qubit:[1,3,1,""]},"components.host.Host":{_get_sequence_number:[1,2,1,""],_log_ack:[1,2,1,""],_process_packet:[1,2,1,""],_process_queue:[1,2,1,""],add_c_connection:[1,2,1,""],add_checksum:[1,2,1,""],add_connection:[1,2,1,""],add_data_qubit:[1,2,1,""],add_epr:[1,2,1,""],add_q_connection:[1,2,1,""],await_ack:[1,2,1,""],change_epr_qubit_id:[1,2,1,""],classical:[1,2,1,""],classical_connections:[1,2,1,""],delay:[1,2,1,""],get_classical:[1,2,1,""],get_connections:[1,2,1,""],get_data_qubit:[1,2,1,""],get_data_qubits:[1,2,1,""],get_epr:[1,2,1,""],get_epr_pairs:[1,2,1,""],get_message_w_seq_num:[1,2,1,""],get_next_classical_message:[1,2,1,""],get_sequence_number:[1,2,1,""],host_id:[1,2,1,""],is_idle:[1,2,1,""],max_ack_wait:[1,2,1,""],quantum_connections:[1,2,1,""],rec_packet:[1,2,1,""],run_protocol:[1,2,1,""],send_ack:[1,2,1,""],send_classical:[1,2,1,""],send_epr:[1,2,1,""],send_key:[1,2,1,""],send_qubit:[1,2,1,""],send_superdense:[1,2,1,""],send_teleport:[1,2,1,""],set_data_qubit_memory_limit:[1,2,1,""],set_epr_memory_limit:[1,2,1,""],shares_epr:[1,2,1,""],start:[1,2,1,""],stop:[1,2,1,""],storage_epr_limit:[1,2,1,""],storage_limit:[1,2,1,""]},"components.network":{Network:[2,1,1,""]},"components.network.Network":{_encode:[2,2,1,""],_entanglement_swap:[2,2,1,""],_process_queue:[2,2,1,""],_remove_network_node:[2,2,1,""],_route_quantum_info:[2,2,1,""],_update_network_graph:[2,2,1,""],add_host:[2,2,1,""],classical_routing_algo:[2,2,1,""],delay:[2,2,1,""],draw_network:[2,2,1,""],get_ARP:[2,2,1,""],get_classical_route:[2,2,1,""],get_host:[2,2,1,""],get_host_name:[2,2,1,""],get_quantum_route:[2,2,1,""],packet_drop_rate:[2,2,1,""],quantum_routing_algo:[2,2,1,""],remove_host:[2,2,1,""],send:[2,2,1,""],set_routing_algo:[2,2,1,""],shares_epr:[2,2,1,""],start:[2,2,1,""],stop:[2,2,1,""],use_hop_by_hop:[2,2,1,""],x_error_rate:[2,2,1,""],z_error_rate:[2,2,1,""]},"components.protocols":{_decode_superdense:[3,3,1,""],_encode_superdense:[3,3,1,""],_rec_classical:[3,3,1,""],_rec_epr:[3,3,1,""],_rec_qubit:[3,3,1,""],_rec_superdense:[3,3,1,""],_rec_teleport:[3,3,1,""],_relay_message:[3,3,1,""],_send_ack:[3,3,1,""],_send_classical:[3,3,1,""],_send_epr:[3,3,1,""],_send_qubit:[3,3,1,""],_send_superdense:[3,3,1,""],_send_teleport:[3,3,1,""],encode:[3,3,1,""],process:[3,3,1,""]},"objects.classical_storage":{ClassicalStorage:[16,1,1,""]},"objects.classical_storage.ClassicalStorage":{add_msg_to_storage:[16,2,1,""],get_all:[16,2,1,""],get_all_from_sender:[16,2,1,""],get_next_from_sender:[16,2,1,""],remove_all_ack:[16,2,1,""]},"objects.message":{Message:[17,1,1,""]},"objects.message.Message":{content:[17,2,1,""],sender:[17,2,1,""],seq_num:[17,2,1,""]},"objects.packet":{Packet:[18,1,1,""]},"objects.packet.Packet":{await_ack:[18,2,1,""],payload:[18,2,1,""],payload_type:[18,2,1,""],protocol:[18,2,1,""],receiver:[18,2,1,""],sender:[18,2,1,""],seq_num:[18,2,1,""]},"objects.quantum_storage":{QuantumStorage:[19,1,1,""]},"objects.quantum_storage.QuantumStorage":{_check_memory_limits:[19,2,1,""],_check_qubit_in_system:[19,2,1,""],_decrease_qubit_counter:[19,2,1,""],_increase_qubit_counter:[19,2,1,""],add_qubit_from_host:[19,2,1,""],change_qubit_id:[19,2,1,""],check_qubit_from_host_exists:[19,2,1,""],get_all_qubits_from_host:[19,2,1,""],get_qubit_from_host:[19,2,1,""],release_storage:[19,2,1,""],set_storage_limit:[19,2,1,""]},"objects.qubit":{Qubit:[20,1,1,""]},"objects.qubit.Qubit":{H:[20,2,1,""],I:[20,2,1,""],T:[20,2,1,""],X:[20,2,1,""],Y:[20,2,1,""],Z:[20,2,1,""],blocked:[20,2,1,""],cnot:[20,2,1,""],cphase:[20,2,1,""],host:[20,2,1,""],id:[20,2,1,""],measure:[20,2,1,""],qubit:[20,2,1,""],release:[20,2,1,""],rx:[20,2,1,""],ry:[20,2,1,""],rz:[20,2,1,""],send_to:[20,2,1,""],set_blocked_state:[20,2,1,""],set_new_host:[20,2,1,""],set_new_id:[20,2,1,""],set_new_qubit:[20,2,1,""]},"objects.routing_packet":{RoutingPacket:[21,1,1,""]},"objects.routing_packet.RoutingPacket":{decrease_ttl:[21,2,1,""],payload:[21,2,1,""],payload_type:[21,2,1,""],protocol:[21,2,1,""],receiver:[21,2,1,""],route:[21,2,1,""],sender:[21,2,1,""],ttl:[21,2,1,""]},components:{host:[1,0,0,"-"],network:[2,0,0,"-"],protocols:[3,0,0,"-"]},objects:{classical_storage:[16,0,0,"-"],message:[17,0,0,"-"],packet:[18,0,0,"-"],quantum_storage:[19,0,0,"-"],qubit:[20,0,0,"-"],routing_packet:[21,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:function"},terms:{"boolean":[1,2,8],"char":6,"class":[1,2,16,17,18,19,20,21],"export":[11,12,13],"final":6,"float":[1,2,20],"function":[1,2,3,6,19],"import":[6,8,9,22],"int":[1,2,3,6,17,18,19,20,21],"long":1,"new":[1,14,19,20,22],"return":[1,2,3,6,7,8,14,16,17,18,19,20,21],"true":[1,6,7,8,9,16,19,20,22],"try":7,"while":[6,7],AES:6,Eve:[6,8],For:[11,12],IDs:[6,21],One:14,The:[0,1,2,3,6,8,9,11,12,13,14,16,17,18,19,20,21,22],These:19,Used:6,With:8,__main__:[8,9,22],__name__:[8,9,22],_check_memory_limit:19,_check_qubit_in_system:19,_decode_superdens:3,_decrease_qubit_count:19,_encod:2,_encode_superdens:3,_entanglement_swap:2,_get_qubit:1,_get_sequence_numb:1,_increase_qubit_count:19,_log_ack:1,_process_packet:1,_process_queu:[1,2],_rec_class:3,_rec_epr:3,_rec_qubit:3,_rec_superdens:3,_rec_teleport:3,_relay_messag:3,_remove_network_nod:2,_route_quantum_info:2,_send_ack:3,_send_class:3,_send_epr:3,_send_qubit:3,_send_superdens:3,_send_teleport:3,_update_network_graph:2,abil:14,abl:6,about:14,access:[0,8],accord:3,accur:14,ack:[1,3,6,8,9,16,18],ack_arriv:[8,9],acknowledg:[1,3,8,14],acknowleg:1,act:1,action:6,activ:[11,12,13],add:[1,2,6,8,16,19,20],add_c_connect:[1,9],add_checksum:1,add_connect:[1,6,7,8,9,22],add_data_qubit:1,add_edg:7,add_epr:1,add_host:[2,6,7,8,9,22],add_msg_to_storag:16,add_q_connect:[1,9],add_qubit_from_host:19,added:[1,2,8,9,19,22],adding:9,addit:20,address:17,after:[8,11,12,13,19,22],again:6,ahead:0,aim:14,algorithm:[2,6,14],alic:[6,8,22],alice_func:6,alice_qkd:6,alice_send_messag:6,all:[1,6,8,9,16,19,22],allow:14,alreadi:[14,19],also:[0,6,14],alwai:9,amount:[1,14,19],angl:20,ani:[1,8],anoth:[1,2,3,14,19,20,22],answer:6,anymor:19,append:6,appli:[3,6,8,20],applic:[0,1,9,14],arbitrari:14,arg:[3,9],argument:1,arp:2,arrai:1,arriv:[1,8,9,14],assum:[8,14,22],asynchron:14,avoid:14,awai:8,await:[3,8],await_ack:[1,3,6,7,8,9,18,22],back:9,backend:[1,2,20],bad:6,base:[1,2,6,14,16,17,18,19,20,21],basi:6,becaus:[6,8,19],bee:6,been:[1,19],befor:[1,8],being:[2,8,22],belong:20,below:[8,9,11],between:[2,14],biggest:6,bin:[11,12],binari:1,bit:[1,3,6],block:[1,2,8,14,20],bob:[6,8],bock:20,bool:[1,2,3,16,18,20],both:[14,22],buffer:[1,6],build:[7,9],built:14,call:[8,19,22],came:9,can:[0,1,6,8,11,12,13,14,19,22],certain:0,chain:2,chang:[1,6,19],change_epr_qubit_id:1,change_qubit_id:19,check:[1,6,19],check_qubit_from_host_exist:19,checksum:1,choic:7,choos:[6,14],chr:6,clasic:1,classic:[1,2,3,4,6,8,9,14,15,17,18,21,22],classical_connect:1,classical_routing_algo:[2,7],classical_storag:16,classicalstorag:16,clear:1,clone:[11,12,13],cnot:20,code:[1,8,9,14,22],com:[11,12,13],come:[0,14,19],command:[11,12],common:[11,12,13,14],commonli:14,commun:[6,8,14],compar:6,complet:22,complic:14,compon:[1,2,3,4,8,9,10,15,22],comput:6,concaten:6,configur:8,connect:[1,6,7,8,9,14,22],consist:3,consol:22,constant:18,contain:[3,14,17],content:[10,17,22],continu:[6,8],control:[2,20],core:14,correct:[11,12,13],could:[14,19],counter:[6,19],cphase:20,creat:[1,2,6,8,14],crypto:6,current:14,custom:14,daemonthread:6,data:[1,3,5,10,21],dean:8,decid:6,decod:[0,3],decreas:[19,21],decrease_ttl:21,decrypt:6,decrypted_msg_from_alic:6,def:[6,7,8,9,22],defin:[6,9],delai:[1,2,8],delet:16,delt:16,demonstr:14,depend:[1,2,3,19,20],design:[10,14],dest:2,destin:2,develop:[14,22],di_graph:7,dict:[1,2,3],dictionari:[1,3],did:[8,9],didn:8,differ:[6,20],digraph:7,direct:[8,9],direction:[8,9],directli:[0,8],directori:[11,12,13],disabl:[9,22],distant:[0,14],distribut:[2,5,10,14],disturb:6,doe:[1,3,19],doesn:1,done:[7,9],download:[11,12,13],draw:2,draw_network:2,driven:14,drop:2,each:[0,6,8,11],easili:14,either:[1,6,8],ele:6,els:[1,6,7,8,9],empti:1,empyt:16,enabl:14,encod:[0,1,2,3],encrypt:6,encrypted_msg_from_alic:6,encrypted_msg_to_ev:6,encrypted_text:6,end:[6,8,9,14],ensur:[8,22],entangl:[0,1,2,3,5,10,14],entanglement_network:7,enter:22,entir:1,environ:[11,12,13],epr:[1,2,3,5,10],epr_id:9,error:[2,7,14],establish:[1,9,14],etc:18,eve:6,eve_func:6,eve_kei:6,eve_qkd:6,eve_receive_messag:6,event:14,exact:19,exampl:[6,8,9,10,11,12,13,14,22],exceed:8,except:7,excit:8,exist:[1,6,16,19],experi:14,expir:9,extern:3,fals:[1,2,3,6,7,16,18,19,20],familiar:6,fangirl:6,featur:[0,14],field:14,figur:9,file:[11,12,13,22],fill:14,first:[1,6,8,9,22],flag:[2,8],flexibl:14,flow:[8,9],follow:0,form:[3,9],found:14,framework:14,from:[1,2,3,6,8,9,16,19,20,21,22],from_host_id:19,from_send:16,full:[8,9,14],fulli:22,gate:[8,20],gener:[0,1,7,9,11,12,13,14,22],generate_entangl:7,generate_epr_if_non:1,get:[1,2,6,8,11,12,13,16,19,22],get_al:16,get_all_from_send:16,get_all_qubits_from_host:19,get_arp:2,get_class:[1,6],get_classical_rout:2,get_connect:[1,7],get_data_qubit:[1,6,8,22],get_epr:[1,9],get_epr_pair:[1,7],get_host:[2,7],get_host_nam:2,get_inst:[6,7,8,9,22],get_message_w_seq_num:1,get_next_classical_messag:[1,6],get_next_from_send:16,get_quantum_rout:2,get_qubit_from_host:19,get_sequence_numb:1,git:[11,12,13],github:[11,12,13],give:[11,20,22],given:[16,19],goal:14,goe:21,got:9,graph:[2,14],greater:[2,11,12],grid:9,guid:10,hadamard:20,half:1,halv:1,happen:14,happi:6,has:[0,1,6,7,8,14,19],have:[1,6,8,9,11,12,14,22],header:3,held:1,help:14,helper:6,her:[6,8],here:[0,6,8,9,11,12,13,15,22],high:14,his:6,hop:[2,8,14],host:[0,2,3,4,6,7,8,9,14,16,19,20,21,22],host_a:[9,22],host_alic:[6,8],host_b:[9,22],host_bob:[6,8],host_c:[9,22],host_connect:7,host_d:22,host_dean:8,host_ev:[6,8],host_id:[1,2,6,7,9,19,22],how:[1,6,9,11,22],howev:6,ident:20,idl:[1,7],ignor:6,implement:[6,19],includ:22,increas:19,inform:[0,1,2,3,8,9,14,20],initi:6,instal:[10,12,13,22],instruct:[9,11,12,13,22],instructor:14,intend:[3,14],interact:0,interv:2,introduct:10,is_idl:[1,7],isn:16,iter:6,its:14,join:6,just:[1,22],kei:[0,5,10,14],key_arrai:6,key_array_to_key_str:6,key_siz:[1,6],key_string_binari:6,know:6,last:1,layer:[0,2,14,18,21],learn:14,len:[6,7],length:2,let:[6,7],level:[11,12,13,14],librari:14,like:[1,14],limit:[1,14,19],line:8,linear:8,link:9,linux:10,list:[1,2,14,16,21],listen:6,live:[2,21],locat:[11,12,13],log:1,logger:[7,9,22],logic:8,loss:14,lost:8,lot:14,lower:2,mac:10,main:[7,8,9,22],mainli:14,major:15,make:[6,11,12,14,22],mani:1,match:6,max:19,max_ack_wait:[1,8],maximum:[1,8],mean:[8,14],measur:[3,6,8,9,20,22],measured_valu:20,measurement_bas:6,memori:[1,14,19],messag:[1,3,4,6,14,15,16],method:9,mind:8,mode:19,modifi:3,moment:14,more:14,most:14,mostli:0,msg:6,msg_buff:6,msg_to_ev:6,multi:14,name:[2,11,12,13,14,22],necessari:[0,6],need:[0,6,8,9,20],network:[0,1,3,4,6,7,8,9,14,21,22],networkx:14,never:0,new_id:[1,19,20],new_limit:19,next:[1,3,6,8,16,19,22],node:[1,2,3,6,7,8,9,14,22],node_1:7,node_2:7,noisi:14,none:[1,2,3,6,8,9,16,19,20],note:[8,9],noth:7,now:[6,8,9],num_epr_pair:7,number:[1,2,3,6,14,17,18,22],numpi:6,o_seq_num:2,object:[0,1,2,4,8,10,14,16,17,18,19,20,21,22],occur:19,offer:14,old:1,old_id:[1,19],onc:6,one:[1,6,8,9,11,12,14,16],onli:[0,6,8,9,16,19],open:22,oper:[3,11,20],option:[1,16,19],ord:6,order:[1,2,14],other:[6,8,9],otherwis:[1,2,6,19],our:[0,6],out:14,outcom:20,over:[6,14],overview:10,own:[6,8,14],packet:[0,1,2,3,4,8,14,15],packet_drop_r:2,pair:[1,2,3,5,10],parallel:8,param:[1,3],paramet:[1,2,3,9,14,16,19,20],pars:3,part:[0,8],parti:[6,8],particular:1,partner:1,partner_id:1,path:[2,11,12,13],pauli:20,payload:[1,2,3,18,21],payload_typ:[2,3,18,21],per:1,perform:[0,2,11,12,13,20],phi:20,physic:[14,20],pip:[11,12,13],place:8,plot:2,pop:6,potenti:14,pre:6,present:[14,15],print:[6,7,8,9,22],privat:0,problem:6,procedur:0,proceed:1,process:[1,2,3,7],processor:1,program:0,programm:8,progress:14,project:[11,12,13],prompt:22,properli:9,properti:[1,2,17,18,20,21],protocol:[0,1,2,4,6,8,9,14,18,21,22],protocol_1:[9,22],protocol_2:[9,22],provid:14,put:[0,1,2,8],pwd:[11,12,13],python3:[11,12,13],python:[11,12,13,14,22],pythonpath:[11,12,13],q_bit:6,q_id:[1,2,8,9,19,20],q_rec:8,qkd:6,quantum:[1,2,4,5,7,8,9,14,15,18,21,22],quantum_connect:1,quantum_routing_algo:[2,7],quantum_storag:19,quantumli:14,quantumstorag:19,qubit:[1,2,3,4,5,6,10,14,15,19,21,22],queue:[1,2],quick:10,qunetsim:[0,6,8,11,12,13,15,20,22],rad:20,randint:6,random:[6,7,14,19],randomli:6,rang:[7,8,9,22],rate:2,reach:19,read:6,real:[6,14],realli:6,rec_packet:1,receiv:[1,2,3,6,9,18,19,21,22],receive_from_id:[1,6],received_count:6,receiver_id:[1,20],recommend:11,reduc:3,regard:[1,14],rel:14,relai:[0,2,3],releas:[19,20],release_qubit:1,release_storag:19,remov:[1,2,16,19,21],remove_all_ack:16,remove_host:2,repeat:6,repositori:[11,12,13],repres:[0,1,2,8,9],represent:2,request:18,requir:[3,11,12,13,14],respons:0,result:[3,6,8],retriev:[1,3],right:6,robust:14,role:0,rotat:20,rout:[0,2,4,5,9,10,14,15],router:1,routing_algorithm:7,routing_packet:21,routingpacket:[3,21],run:[0,1,2,6,7,8,9,11,12,13,22],run_protocol:[1,7,9,22],safe:[8,9],sai:8,same:[6,8,11,12,13,19],script:[11,12,13,22],second:[1,7,9,22],secret:[6,14],secret_kei:6,secret_key_str:6,section:14,secur:6,see:[6,8,9],send:[1,2,3,5,6,7,10,14,20,22],send_ack:1,send_class:[1,6],send_epr:[1,7,9],send_kei:1,send_qubit:[1,6,8,22],send_superdens:[1,7],send_teleport:1,send_to:20,sender:[1,2,3,9,16,17,18,21,22],sender_id:[1,16],sens:14,sent:[1,2,8],seq:[1,6],seq_num:[1,17,18],seq_numb:[1,3],sequenc:[1,3,6,14,17,18],sequence_nr:[1,6],sequence_num:3,sequence_numb:[1,18],set:[0,1,2,6,8,9,11,12,13,16,19,20,22],set_blocked_st:20,set_data_qubit_memory_limit:1,set_delai:7,set_epr_memory_limit:1,set_new_host:20,set_new_id:20,set_new_qubit:20,set_routing_algo:2,set_storage_limit:19,share:[1,2,6],shares_epr:[1,2],she:[6,8],shortest:2,shortest_path:7,should:[1,2,3,6,9,11,12,16,19,20,21,22],show:9,side:8,signal:2,similar:8,simpl:[9,14,22],simul:[8,14],singleton:2,sit:8,size:[1,6],size_per_qubit:1,sleep:7,small:[6,11,12,13],solv:6,some:14,someth:8,sometim:14,sort:1,sourc:[2,7,11,12],specif:[1,14,19],specifi:[1,9],split:6,squar:9,start:[1,2,6,7,8,9,10,11,12,13],state:[8,14,20,22],statu:1,step:[14,22],still:[6,14],stop:[1,2,7,8],stop_host:[2,7,8],storag:[1,4,15],storage_epr_limit:1,storage_limit:1,storage_limit_individually_per_host:19,store:[1,14,16,19],str:[1,6,7,8,9,17,18,19,20,21],string:[1,2,3,6,16,17,19,20],structur:[11,12,13,14],student:14,style:[2,8],suggest:14,superdens:[1,3,7,14],support:3,sure:[11,12],swap:[2,14],system:[11,19,20],tabl:2,take:21,talk:6,target:[7,20],task:14,teleport:[1,3,14],tell:8,templat:[11,12,13,22],termin:[11,12,22],test:[6,14,22],text:6,than:2,thei:6,them:6,therefor:14,thi:[2,6,8,9,11,12,13,14,16,19,20,21,22],those:14,thread:[1,2,6,14],three:[6,15],through:9,tick:1,till:6,time:[0,1,2,7,8,9,14,21],todo:14,toi:14,told:6,too:[1,6],topolog:[6,14],tqsd:[11,12,13],traffic:[8,9],transmiss:[6,14],transmit:[3,8,14],transport:[0,18,21],travel:21,trigger:18,trivial:6,ttl:[2,3,21],tupl:1,two:[0,1,6,8,14],txt:[11,12,13],type:[1,2,3,7,9,14,17,18,20,21,22],typic:14,unblock:1,unfortun:6,uni:[8,9],unread:16,until:[1,8,14],updat:2,upgrad:[11,12,13],usabl:19,use:[1,6,8,9,11,12,13,22],use_hop_by_hop:[2,7],used:[0,6,14],user:[0,11,12,14],uses:[2,14],using:[6,8,9,11],valu:[1,2,8],variabl:2,variou:14,venv:[11,12,13],veri:14,version:0,via:1,virtual:[11,12,13],wai:[6,8,14],wait:[1,6,8,9,22],wait_tim:6,want:[6,14],warn:6,weight:7,were:22,what:[3,6,8],when:[0,9,21],where:[8,9,11,12,13,14],whether:[1,2],which:[1,2,3,6,11,12,13,19,20,21],who:[1,8,16,19,20],whom:19,whose:2,window:10,without:[6,8],work:[6,14,22],would:14,wrapper:20,write:[0,8,9,14,22],x_error_r:2,yet:6,you:[6,11,12,13,22],your:[6,11,12,13,22],z_error_r:2,zip:6},titles:["Components","Host","Network","Protocols","Design Overview","Examples","Quantum Key Distribution","Routing with Entanglement","Send Data Qubits","Send EPR Pairs","QuNetSim: A quantum network simulation framework","Install","Linux / Mac OS X","Windows","Introduction","Network Objects","Classical Storage","Message","Packet","Quantum Storage","Qubit","Routing Packet","Quick Start Guide"],titleterms:{classic:16,compon:0,data:8,design:4,distribut:6,entangl:7,epr:9,exampl:5,framework:10,guid:22,host:1,instal:11,introduct:14,kei:6,linux:[11,12],mac:[11,12],messag:17,network:[2,10,15],object:15,overview:4,packet:[18,21],pair:9,protocol:3,quantum:[6,10,19],qubit:[8,20],quick:22,qunetsim:[10,14],rout:[7,21],send:[8,9],should:14,simul:10,start:22,storag:[16,19],use:14,what:14,who:14,window:[11,13]}})