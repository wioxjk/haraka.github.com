__NUXT_JSONP__("/core/Outbound", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD){return {data:[{document:{slug:"Outbound",title:"Outbound Mail with Haraka",position:12,category:"Core",toc:[{id:L,depth:o,text:M},{id:N,depth:p,text:O},{id:P,depth:p,text:Q},{id:R,depth:o,text:S},{id:T,depth:o,text:U},{id:V,depth:o,text:W},{id:X,depth:p,text:Y},{id:Z,depth:p,text:_},{id:$,depth:p,text:aa},{id:ab,depth:p,text:ac},{id:ad,depth:p,text:ae},{id:af,depth:p,text:ag},{id:ah,depth:o,text:ai},{id:aj,depth:o,text:ak},{id:al,depth:o,text:am},{id:an,depth:o,text:ao}],body:{type:"root",children:[{type:b,tag:e,props:{},children:[{type:a,value:"A default installation of Haraka will queue outbound mail for delivery in the\nqueue directory. Those mails will be delivered to the appropriate MX record\nfor that domain. Mails are queued onto your disk, and will deal appropriately\nwith temporary failures to retry delivery later."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Outbound mails are defined as those that have set the "},{type:b,tag:d,props:{},children:[{type:a,value:"connection.relaying"}]},{type:a,value:"\nflag to "},{type:b,tag:d,props:{},children:[{type:a,value:i}]},{type:a,value:" via a plugin. The simplest way of doing that is to use SMTP\nAUTH, and have the client authenticate. For example using the "},{type:b,tag:d,props:{},children:[{type:a,value:"auth\u002Fflat_file"}]},{type:a,value:"\nplugin. However it is very simple to write a custom plugin to do this."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"For statistics on outbound mail use the "},{type:b,tag:d,props:{},children:[{type:a,value:"process_title"}]},{type:a,value:" plugin. See the\ndocumentation for that plugin for details."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"To flush the outbound queue (for temporary failed mails) hit the Haraka master\nprocess with the SIGHUP signal (via the "},{type:b,tag:d,props:{},children:[{type:a,value:"kill"}]},{type:a,value:" command line tool)."}]},{type:a,value:c},{type:b,tag:q,props:{id:L},children:[{type:b,tag:h,props:{href:"#outbound-configuration-files",ariaHidden:i,tabIndex:j},children:[{type:b,tag:k,props:{className:[l,m]},children:[]}]},{type:a,value:M}]},{type:a,value:c},{type:b,tag:r,props:{id:N},children:[{type:b,tag:h,props:{href:"#outboundini",ariaHidden:i,tabIndex:j},children:[{type:b,tag:k,props:{className:[l,m]},children:[]}]},{type:a,value:O}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:ap}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Default: false. Allows one to temporarily disable outbound delivery, while\nstill receiving and queuing emails. This can be changed while Haraka is\nrunning."}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:"concurrency_max"}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Default: 100. Specifies the maximum concurrent connections to make. Note that\nif using cluster (multiple CPUs) then this will be multiplied by the number\nof CPUs that you have."}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:"enable_tls"}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Default: true. Switch to false to disable TLS for outbound mail."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"This uses the same "},{type:b,tag:d,props:{},children:[{type:a,value:"tls_key.pem"}]},{type:a,value:t},{type:b,tag:d,props:{},children:[{type:a,value:"tls_cert.pem"}]},{type:a,value:" files that the "},{type:b,tag:d,props:{},children:[{type:a,value:"tls"}]},{type:a,value:"\nplugin uses, along with other values in "},{type:b,tag:d,props:{},children:[{type:a,value:aq}]},{type:a,value:". See the "},{type:b,tag:h,props:{href:"http:\u002F\u002Fharaka.github.io\u002Fmanual\u002Fplugins\u002Ftls.html",rel:[D,E,F],target:G},children:[{type:a,value:"tls plugin\ndocs"}]},{type:a,value:" for information on generating those\nfiles."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Within "},{type:b,tag:d,props:{},children:[{type:a,value:aq}]},{type:a,value:" you can specify global options for the values "},{type:b,tag:d,props:{},children:[{type:a,value:"ciphers"}]},{type:a,value:",\n"},{type:b,tag:d,props:{},children:[{type:a,value:"requestCert"}]},{type:a,value:t},{type:b,tag:d,props:{},children:[{type:a,value:"rejectUnauthorized"}]},{type:a,value:", alternatively you can provide\nseparate values by putting them under a key: "},{type:b,tag:d,props:{},children:[{type:a,value:"[outbound]"}]},{type:a,value:", such as:"}]},{type:a,value:c},{type:b,tag:u,props:{className:[v]},children:[{type:b,tag:w,props:{className:[x,y]},children:[{type:b,tag:d,props:{},children:[{type:a,value:"[outbound]\nciphers=!DES\n"}]}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:"ipv6_enabled"}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"When this has a \"true\" value inside (usually a "},{type:b,tag:d,props:{},children:[{type:a,value:"1"}]},{type:a,value:"), it defaults to an 'AAAA'\nlookup first for each MX record, and uses those hosts to send email via."}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:H}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Default: false. By default, Haraka groups message recipients by domain so that\nmessages with multiple recipients at the same domain get sent in a single SMTP\nsession. When "},{type:b,tag:d,props:{},children:[{type:a,value:H}]},{type:a,value:" is enabled, each recipient gets a queue entry and\ndelivery in its own SMTP session. This carries a performance penalty but\nenables more flexibility in mail delivery and bounce handling."}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:"received_header"}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Default: \"Haraka outbound\". If this text is any string except "},{type:b,tag:I,props:{},children:[{type:a,value:ap}]},{type:a,value:", the\nstring is attached as a "},{type:b,tag:d,props:{},children:[{type:a,value:"Received"}]},{type:a,value:" header to all outbound mail just before it is queued."}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:"connect_timeout"}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Timeout for connecting to remote servers. Default: 30s"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:ar}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Outbound mail uses \"pooled\" connections. An unused pool connection will send\na QUIT after this time. Default: 50s"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Pooled connections means that a mail to a particular IP address will hold that\nconnection open and use it the next time it is requested. This helps with\nlarge scale outbound mail. If you don't send lots of mail it is advised to\nlower the "},{type:b,tag:d,props:{},children:[{type:a,value:ar}]},{type:a,value:" value since it may upset receiving mail servers."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Setting this value to "},{type:b,tag:d,props:{},children:[{type:a,value:as}]},{type:a,value:" will effectively disable the use of pools. You may\nwish to set this if you have a "},{type:b,tag:d,props:{},children:[{type:a,value:s}]},{type:a,value:" hook that picks outbound servers on\na per-email basis (rather than per-domain)."}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:"pool_concurrency_max"}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Set this to "},{type:b,tag:d,props:{},children:[{type:a,value:as}]},{type:a,value:" to completely disable the pooling code."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"This value determines how many concurrent connections can be made to a single\nIP address (destination) in the pool. Default: 10 connections."}]},{type:a,value:c},{type:b,tag:r,props:{id:P},children:[{type:b,tag:h,props:{href:"#outboundbounce_message",ariaHidden:i,tabIndex:j},children:[{type:b,tag:k,props:{className:[l,m]},children:[]}]},{type:a,value:Q}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"See \"Bounce Messages\" below for details."}]},{type:a,value:c},{type:b,tag:q,props:{id:R},children:[{type:b,tag:h,props:{href:"#the-hmail-object",ariaHidden:i,tabIndex:j},children:[{type:b,tag:k,props:{className:[l,m]},children:[]}]},{type:a,value:S}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Many hooks (see below) pass in a "},{type:b,tag:d,props:{},children:[{type:a,value:at}]},{type:a,value:" object."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"You likely won't ever need to call methods on this object, so they are left\nundocumented here."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"The attributes of an "},{type:b,tag:d,props:{},children:[{type:a,value:at}]},{type:a,value:" object that may be of use are:"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"path - the full path to the queue file"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"filename - the filename within the queue dir"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"num_failures - the number of times this mail has been temp failed"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"notes - notes you can store on a hmail object (similar to "},{type:b,tag:d,props:{},children:[{type:a,value:"transaction.notes"}]},{type:a,value:")\nto allow you to pass information between outbound hooks"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"todo - see below"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:q,props:{id:T},children:[{type:b,tag:h,props:{href:"#the-todo-object",ariaHidden:i,tabIndex:j},children:[{type:b,tag:k,props:{className:[l,m]},children:[]}]},{type:a,value:U}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"The "},{type:b,tag:d,props:{},children:[{type:a,value:"todo"}]},{type:a,value:" object contains information about how to deliver this mail. Keys\nyou may be interested in are:"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"rcpt_to - an Array of "},{type:b,tag:d,props:{},children:[{type:a,value:C}]},{type:a,value:"[1] objects - the rfc.2821 recipients of this mail"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"mail_from - an "},{type:b,tag:d,props:{},children:[{type:a,value:C}]},{type:a,value:"[1] object - the rfc.2821 sender of this mail"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"domain - the domain this mail is going to (see "},{type:b,tag:d,props:{},children:[{type:a,value:H}]},{type:a,value:" above)"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"notes - the original transaction.notes for this mail, also contains the\nfollowing useful keys:"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"** outbound_ip - the IP address to bind to (note do not set this manually,\nuse the "},{type:b,tag:d,props:{},children:[{type:a,value:s}]},{type:a,value:" hook)\n** outbound_helo - the EHLO domain to use (again, do not set manually)"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"queue_time - the epoch milliseconds time when this mail was queued"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"uuid - the original transaction.uuid"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:q,props:{id:V},children:[{type:b,tag:h,props:{href:"#outbound-mail-hooks",ariaHidden:i,tabIndex:j},children:[{type:b,tag:k,props:{className:[l,m]},children:[]}]},{type:a,value:W}]},{type:a,value:c},{type:b,tag:r,props:{id:X},children:[{type:b,tag:h,props:{href:"#the-queue_outbound-hook",ariaHidden:i,tabIndex:j},children:[{type:b,tag:k,props:{className:[l,m]},children:[]}]},{type:a,value:Y}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"The first hook that is called prior to queueing an outbound mail is the\n"},{type:b,tag:d,props:{},children:[{type:a,value:"queue_outbound"}]},{type:a,value:" hook. Only if all these hooks return "},{type:b,tag:d,props:{},children:[{type:a,value:"CONT"}]},{type:a,value:" (or if there are\nno hooks) will the mail be queued for outbound delivery. A return of "},{type:b,tag:d,props:{},children:[{type:a,value:J}]},{type:a,value:" will\nindicate that the mail has been queued in some custom manner for outbound\ndelivery. Any of the "},{type:b,tag:d,props:{},children:[{type:a,value:"DENY"}]},{type:a,value:" return codes will cause the message to be\nappropriately rejected."}]},{type:a,value:c},{type:b,tag:r,props:{id:Z},children:[{type:b,tag:h,props:{href:"#the-send_email-hook",ariaHidden:i,tabIndex:j},children:[{type:b,tag:k,props:{className:[l,m]},children:[]}]},{type:a,value:_}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:A},{type:b,tag:d,props:{},children:[{type:a,value:"next, hmail"}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Called just as the email is about to be sent."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Respond with "},{type:b,tag:d,props:{},children:[{type:a,value:"next(DELAY, delay_seconds)"}]},{type:a,value:" to defer sending the email at this time."}]},{type:a,value:c},{type:b,tag:r,props:{id:$},children:[{type:b,tag:h,props:{href:"#the-get_mx-hook",ariaHidden:i,tabIndex:j},children:[{type:b,tag:k,props:{className:[l,m]},children:[]}]},{type:a,value:aa}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:A},{type:b,tag:d,props:{},children:[{type:a,value:"next, hmail, domain"}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Upon starting delivery the "},{type:b,tag:d,props:{},children:[{type:a,value:s}]},{type:a,value:" hook is called, with the parameter set to\nthe domain in question (for example a mail to "},{type:b,tag:d,props:{},children:[{type:a,value:"user@example.com"}]},{type:a,value:" will call the\n"},{type:b,tag:d,props:{},children:[{type:a,value:s}]},{type:a,value:" hook with "},{type:b,tag:d,props:{},children:[{type:a,value:"(next, hmail, domain)"}]},{type:a,value:" as parameters). This is to allow\nyou to implement a custom handler to find MX records. For most installations\nthere is no reason to implement this hook - Haraka will find the correct MX\nrecords for you."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"The MX record is sent via next(OK, mx) and can be one of:"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"A string of one of the following formats:\n"},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"hostname"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"hostname:port"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"ipaddress"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"ipaddress:port"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"An MX object of the form: "},{type:b,tag:d,props:{},children:[{type:a,value:"{priority: 0, exchange: hostname}"}]},{type:a,value:" with the"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"following optional properies:\n* "},{type:b,tag:d,props:{},children:[{type:a,value:au}]},{type:a,value:" to specify an alternate port\n* "},{type:b,tag:d,props:{},children:[{type:a,value:K}]},{type:a,value:" to specify an outbound IP address to bind to\n* "},{type:b,tag:d,props:{},children:[{type:a,value:av}]},{type:a,value:" to specify an outbound helo for IP address to bind to\n* "},{type:b,tag:d,props:{},children:[{type:a,value:"using_lmtp"}]},{type:a,value:" boolean to specify that delivery should be attempted using\nLMTP instead of SMTP.\n*  "},{type:b,tag:d,props:{},children:[{type:a,value:aw}]},{type:a,value:" to specify an AUTH username (required if AUTH is desired)\n*  "},{type:b,tag:d,props:{},children:[{type:a,value:ax}]},{type:a,value:" to specify an AUTH password (required if AUTH is desired)\n*  "},{type:b,tag:d,props:{},children:[{type:a,value:"auth_type"}]},{type:a,value:" to specify an AUTH type that should be used with the MX.\nIf this is not specified then Haraka will pick an appropriate method."}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"A list of MX objects in an array, each in the same format as above."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:r,props:{id:ab},children:[{type:b,tag:h,props:{href:"#the-deferred-hook",ariaHidden:i,tabIndex:j},children:[{type:b,tag:k,props:{className:[l,m]},children:[]}]},{type:a,value:ac}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:A},{type:b,tag:d,props:{},children:[{type:a,value:"next, hmail, {delay: ..., err: ...}"}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"If the mail is temporarily deferred, the "},{type:b,tag:d,props:{},children:[{type:a,value:"deferred"}]},{type:a,value:" hook is called. The hook\nparameter is an object with keys: "},{type:b,tag:d,props:{},children:[{type:a,value:ay}]},{type:a,value:t},{type:b,tag:d,props:{},children:[{type:a,value:"err"}]},{type:a,value:", which explain the delay\n(in seconds) and error message."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"If you want to stop at this point, and drop the mail completely, then you\ncan call "},{type:b,tag:d,props:{},children:[{type:a,value:"next(OK)"}]},{type:a,value:B}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"If you want to change the delay, then call "},{type:b,tag:d,props:{},children:[{type:a,value:"next(DENYSOFT, delay_in_seconds)"}]},{type:a,value:".\nUsing this you can define a custom delay algorithm indexed by\n"},{type:b,tag:d,props:{},children:[{type:a,value:"hmail.num_failures"}]},{type:a,value:B}]},{type:a,value:c},{type:b,tag:r,props:{id:ad},children:[{type:b,tag:h,props:{href:"#the-bounce-hook",ariaHidden:i,tabIndex:j},children:[{type:b,tag:k,props:{className:[l,m]},children:[]}]},{type:a,value:ae}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:A},{type:b,tag:d,props:{},children:[{type:a,value:"next, hmail, error"}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"If the mail completely bounces then the "},{type:b,tag:d,props:{},children:[{type:a,value:az}]},{type:a,value:" hook is called. This is "},{type:b,tag:I,props:{},children:[{type:a,value:"not"}]},{type:a,value:"\ncalled if the mail is issued a temporary failure (a 4xx error code). The hook\nparameter is the error message received from the remote end as an "},{type:b,tag:d,props:{},children:[{type:a,value:"Error"}]},{type:a,value:" object.\nThe object may also have the following properties:"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"mx - the MX object that caused the bounce"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"deferred_rcpt - the deferred recipients that eventually bounced"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"bounced_rcpt - the bounced recipients"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"If you do not wish to have a bounce message sent to the originating sender of the\nemail then you can return "},{type:b,tag:d,props:{},children:[{type:a,value:J}]},{type:a,value:" from this hook to stop it from sending a bounce message."}]},{type:a,value:c},{type:b,tag:r,props:{id:af},children:[{type:b,tag:h,props:{href:"#the-delivered-hook",ariaHidden:i,tabIndex:j},children:[{type:b,tag:k,props:{className:[l,m]},children:[]}]},{type:a,value:ag}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:A},{type:b,tag:d,props:{},children:[{type:a,value:"next, hmail, params"}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Params is a list of: "},{type:b,tag:d,props:{},children:[{type:a,value:"[host, ip, response, delay, port, mode, ok_recips, secured]"}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"When mails are successfully delivered to the remote end then the "},{type:b,tag:d,props:{},children:[{type:a,value:aA}]},{type:a,value:"\nhook is called. The return codes from this hook have no effect, so it is only\nuseful for logging the fact that a successful delivery occurred."}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:"host"}]},{type:a,value:" - Hostname of the MX that the message was delivered to,"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:"ip"}]},{type:a,value:" - IP address of the host that the message was delivered to,"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:"response"}]},{type:a,value:" - Variable contains the SMTP response text returned by the host"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"that received the message and will typically contain the remote queue ID and"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:ay}]},{type:a,value:" - Time taken between the queue file being created and the"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"message being delivered."}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:au}]},{type:a,value:" - Port number that the message was delivered to."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:"mode"}]},{type:a,value:" - Shows whether SMTP or LMTP was used to deliver the mail."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:"ok_recips"}]},{type:a,value:" - an "},{type:b,tag:d,props:{},children:[{type:a,value:C}]},{type:a,value:"[1] array containing all of the recipients that were"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"successfully delivered to."}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:"secured"}]},{type:a,value:" - A boolean denoting if the connection used TLS or not."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:q,props:{id:ah},children:[{type:b,tag:h,props:{href:"#outbound-ip-address",ariaHidden:i,tabIndex:j},children:[{type:b,tag:k,props:{className:[l,m]},children:[]}]},{type:a,value:ai}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Normally the OS will decide which IP address will be used for outbound\nconnections using the IP routing table."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"There are instances where you may want to separate outbound traffic on\ndifferent IP addresses based on sender, domain or some other identifier."},{type:b,tag:"br",props:{},children:[]},{type:a,value:"\nTo do this, the IP address that you want to use "},{type:b,tag:I,props:{},children:[{type:a,value:"must"}]},{type:a,value:" be bound to an\ninterface (or alias) on the local system."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"As described above the outbound IP can be set using the "},{type:b,tag:d,props:{},children:[{type:a,value:K}]},{type:a,value:" parameter\nand also the outbound helo for the IP can be set using the "},{type:b,tag:d,props:{},children:[{type:a,value:"bind_ehlo"}]},{type:a,value:"\nparameter returned my the "},{type:b,tag:d,props:{},children:[{type:a,value:s}]},{type:a,value:" hook or during the reception of the message\nyou can set a transaction note in a plugin to tell Haraka which outbound IP\naddress you would like it to use when it tries to deliver the message:"}]},{type:a,value:c},{type:b,tag:u,props:{className:[v]},children:[{type:b,tag:w,props:{className:[x,y]},children:[{type:b,tag:d,props:{},children:[{type:a,value:"connection.transaction.notes.outbound_ip = '1.2.3.4';\nconnection.transaction.notes.outbound_helo = 'mail-2.example.com';\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Note: if the "},{type:b,tag:d,props:{},children:[{type:a,value:s}]},{type:a,value:" hook returns a "},{type:b,tag:d,props:{},children:[{type:a,value:K}]},{type:a,value:t},{type:b,tag:d,props:{},children:[{type:a,value:av}]},{type:a,value:" parameter, then\nthis will be used in preference to the transaction note."}]},{type:a,value:c},{type:b,tag:q,props:{id:aj},children:[{type:b,tag:h,props:{href:"#auth",ariaHidden:i,tabIndex:j},children:[{type:b,tag:k,props:{className:[l,m]},children:[]}]},{type:a,value:ak}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"If you wish to use AUTH for a particular domain or domains, or you wish to\nforce all mail to an outbound service or smart host that requires authentication\nthen you can use the "},{type:b,tag:d,props:{},children:[{type:a,value:s}]},{type:a,value:" hook documented above to do this by supplying\nboth "},{type:b,tag:d,props:{},children:[{type:a,value:aw}]},{type:a,value:t},{type:b,tag:d,props:{},children:[{type:a,value:ax}]},{type:a,value:" properties in an MX object."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"If AUTH properties are supplied and the remote end does not offer AUTH or there\nare no compatible AUTH methods, then the message will be sent without AUTH and\na warning will be logged."}]},{type:a,value:c},{type:b,tag:q,props:{id:al},children:[{type:b,tag:h,props:{href:"#bounce-messages",ariaHidden:i,tabIndex:j},children:[{type:b,tag:k,props:{className:[l,m]},children:[]}]},{type:a,value:am}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"The contents of the bounce message are configured by a file called\n"},{type:b,tag:d,props:{},children:[{type:a,value:"config\u002Foutbound.bounce_message"}]},{type:a,value:". If you look at this file you will see it\ncontains several template entries wrapped in curly brackets. These will be\npopulated as follows:"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Optional: Possibility to add HTML code (with optional image) to the bounce message is possible\nby adding the files "},{type:b,tag:d,props:{},children:[{type:a,value:"config\u002Foutbound.bounce_message_html"}]},{type:a,value:". An image can be attached\nto the mail by using "},{type:b,tag:d,props:{},children:[{type:a,value:"config\u002Foutbound.bounce_message_image"}]},{type:a,value:B}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"pid - the current process id"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"date - the current date when the bounce occurred"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"me - the contents of "},{type:b,tag:d,props:{},children:[{type:a,value:"config\u002Fme"}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"from - the originating sender of the message"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"msgid - a uuid for the mail"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"to - the end recipient of the message, or the first recipient if it was to"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"multiple people"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"reason - the text from the remote server indicating why it bounced"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Following the bounce message itself will be a copy of the entire original\nmessage."}]},{type:a,value:c},{type:b,tag:q,props:{id:an},children:[{type:b,tag:h,props:{href:"#creating-a-mail-internally-for-outbound-delivery",ariaHidden:i,tabIndex:j},children:[{type:b,tag:k,props:{className:[l,m]},children:[]}]},{type:a,value:ao}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Sometimes it is necessary to generate a new mail from within a plugin."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"To do that, you can use the "},{type:b,tag:d,props:{},children:[{type:a,value:"outbound"}]},{type:a,value:" module directly:"}]},{type:a,value:c},{type:b,tag:u,props:{className:[v]},children:[{type:b,tag:w,props:{className:[x,y]},children:[{type:b,tag:d,props:{},children:[{type:a,value:"var outbound = require('.\u002Foutbound');\n\nvar plugin = this;\n\nvar to = 'user@example.com';\nvar from = 'sender@example.com';\n\nvar contents = [\n    \"From: \" + from,\n    \"To: \" + to,\n    \"MIME-Version: 1.0\",\n    \"Content-type: text\u002Fplain; charset=us-ascii\",\n    \"Subject: Some subject here\",\n    \"\",\n    \"Some email body here\",\n    \"\"].join(\"\\n\");\n    \nvar outnext = function (code, msg) {\n    switch (code) {\n        case DENY:  plugin.logerror(\"Sending mail failed: \" + msg);\n                    break;\n        case OK:    plugin.loginfo(\"mail sent\");\n                    next();\n                    break;\n        default:    plugin.logerror(\"Unrecognized return code from sending email: \" + msg);\n                    next();\n    }\n};\n\noutbound.send_email(from, to, contents, outnext);\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"The callback on "},{type:b,tag:d,props:{},children:[{type:a,value:aB}]},{type:a,value:" is passed "},{type:b,tag:d,props:{},children:[{type:a,value:J}]},{type:a,value:" if the mail is successfully\nqueued to disk, not when it is successfully delivered. To check delivery\nstatus you still need to hook "},{type:b,tag:d,props:{},children:[{type:a,value:aA}]},{type:a,value:t},{type:b,tag:d,props:{},children:[{type:a,value:az}]},{type:a,value:" to know if it was\nsuccessfully delivered."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"The callback parameter may be omitted if you don't need to handle errors\nshould queueing to disk fail e.g:"}]},{type:a,value:c},{type:b,tag:u,props:{className:[v]},children:[{type:b,tag:w,props:{className:[x,y]},children:[{type:b,tag:d,props:{},children:[{type:a,value:"outbound.send_email(from, to, contents);\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"You can pass various options to "},{type:b,tag:d,props:{},children:[{type:a,value:"outbound.send_email"}]},{type:a,value:" like so:"}]},{type:a,value:c},{type:b,tag:u,props:{className:[v]},children:[{type:b,tag:w,props:{className:[x,y]},children:[{type:b,tag:d,props:{},children:[{type:a,value:"outbound.send_email(from, to, contents, outnext, options);\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Where "},{type:b,tag:d,props:{},children:[{type:a,value:"options"}]},{type:a,value:" is a Object that may contain the following keys:"}]},{type:a,value:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"},{type:b,tag:"table",props:{},children:[{type:b,tag:"thead",props:{},children:[{type:b,tag:z,props:{},children:[{type:b,tag:aC,props:{},children:[{type:a,value:"Key\u002FValue"}]},{type:b,tag:aC,props:{},children:[{type:a,value:"Description"}]}]}]},{type:b,tag:"tbody",props:{},children:[{type:b,tag:z,props:{},children:[{type:b,tag:n,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:"dot_stuffed: true"}]}]},{type:b,tag:n,props:{},children:[{type:a,value:"Use this if you are passing your content dot-stuffed (a dot at the start of a line is doubled, like it is in SMTP conversation, see "},{type:b,tag:h,props:{href:"https:\u002F\u002Ftools.ietf.org\u002Fhtml\u002Frfc2821#section-4.5.2",rel:[D,E,F],target:G},children:[{type:a,value:"RFC 2821"}]},{type:a,value:B}]}]},{type:b,tag:z,props:{},children:[{type:b,tag:n,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:"notes: { key: value}"}]}]},{type:b,tag:n,props:{},children:[{type:a,value:"In case you need notes in the new transaction that "},{type:b,tag:d,props:{},children:[{type:a,value:aB}]},{type:a,value:" creates."}]}]},{type:b,tag:z,props:{},children:[{type:b,tag:n,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:"remove_msgid: true"}]}]},{type:b,tag:n,props:{},children:[{type:a,value:"Remove any Message-Id header found in the message.  If you are reading a message in from the filesystem and you want to ensure that a generated Message-Id header is used in preference over the original.  This is useful if you are releasing mail from a quarantine."}]}]},{type:b,tag:z,props:{},children:[{type:b,tag:n,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:"remove_date: true"}]}]},{type:b,tag:n,props:{},children:[{type:a,value:"Remove any Date header found in the message.  If you are reading a message in from the filesystem and you want to ensure that a generated Date header is used in preference over the original.  This is useful if you are releasing mail from a quarantine."}]}]},{type:b,tag:z,props:{},children:[{type:b,tag:n,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:"origin: Object"}]}]},{type:b,tag:n,props:{},children:[{type:a,value:"Adds object as argument to logger.log calls inside outbound.send_email. Useful for tracking which Plugin\u002FConnection\u002FHMailItem object generated email."}]}]}]}]},{type:a,value:c},{type:b,tag:u,props:{className:[v]},children:[{type:b,tag:w,props:{className:[x,y]},children:[{type:b,tag:d,props:{},children:[{type:a,value:"outbound.send_email(from, to, contents, outnext, { notes: transaction.notes });\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"[1]: "},{type:b,tag:d,props:{},children:[{type:a,value:C}]},{type:a,value:" objects are "},{type:b,tag:h,props:{href:"https:\u002F\u002Fgithub.com\u002Fharaka\u002Fnode-address-rfc2821",rel:[D,E,F],target:G},children:[{type:a,value:"address-rfc2821 objects"}]},{type:a,value:B}]}]},dir:"\u002Fen\u002Fcore",path:"\u002Fen\u002Fcore\u002FOutbound",extension:".md",createdAt:"2021-02-01T00:51:19.918Z",updatedAt:"2021-02-01T00:51:19.922Z",to:"\u002Fcore\u002FOutbound"},prev:{slug:"Logging",title:"Haraka Logging",to:"\u002Fcore\u002FLogging"},next:{slug:aD,title:aD,to:"\u002Fcore\u002FPlugins"}}],fetch:[],mutations:[]}}("text","element","\n","code","p","li","ul","a","true",-1,"span","icon","icon-link","td",2,3,"h2","h3","get_mx"," and ","div","nuxt-content-highlight","pre","language-text","line-numbers","tr","Parameters: ",".","Address","nofollow","noopener","noreferrer","_blank","always_split","em","OK","bind","outbound-configuration-files","Outbound Configuration Files","outboundini","outbound.ini","outboundbounce_message","outbound.bounce_message","the-hmail-object","The HMail Object","the-todo-object","The ToDo Object","outbound-mail-hooks","Outbound Mail Hooks","the-queue_outbound-hook","The queue_outbound hook","the-send_email-hook","The send_email hook","the-get_mx-hook","The get_mx hook","the-deferred-hook","The deferred hook","the-bounce-hook","The bounce hook","the-delivered-hook","The delivered hook","outbound-ip-address","Outbound IP address","auth","AUTH","bounce-messages","Bounce Messages","creating-a-mail-internally-for-outbound-delivery","Creating a mail internally for outbound delivery","disabled","tls.ini","pool_timeout","0","hmail","port","bind_helo","auth_user","auth_pass","delay","bounce","delivered","send_email()","th","Plugins")));