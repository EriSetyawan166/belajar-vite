import{s as u}from"./say-hello-avYJbGy6.js";const a=n=>{console.info(`Goodbye ${n}!`)};var e=[];for(var c=0;c<256;++c)e.push((c+256).toString(16).slice(1));function r(n,o=0){return(e[n[o+0]]+e[n[o+1]]+e[n[o+2]]+e[n[o+3]]+"-"+e[n[o+4]]+e[n[o+5]]+"-"+e[n[o+6]]+e[n[o+7]]+"-"+e[n[o+8]]+e[n[o+9]]+"-"+e[n[o+10]]+e[n[o+11]]+e[n[o+12]]+e[n[o+13]]+e[n[o+14]]+e[n[o+15]]).toLowerCase()}var i,l=new Uint8Array(16);function y(){if(!i&&(i=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!i))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return i(l)}var m=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);const d={randomUUID:m};function s(n,o,w){if(d.randomUUID&&!o&&!n)return d.randomUUID();n=n||{};var t=n.random||(n.rng||y)();return t[6]=t[6]&15|64,t[8]=t[8]&63|128,r(t)}const p="Eri",g="www.kudaungu.com",U="apaaja",v="Hello, this is a text file";u("Eri");a("Eri");console.info(s());console.info(p);console.info(g);console.info(U);console.info(v);
