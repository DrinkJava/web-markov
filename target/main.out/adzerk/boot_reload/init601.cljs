(ns adzerk.boot-reload.init601 (:require [adzerk.boot-reload.client :as client]))
(client/connect "ws://localhost:38627" {:ws-host nil, :asset-host nil, :on-jsload (fn* [] (+))})