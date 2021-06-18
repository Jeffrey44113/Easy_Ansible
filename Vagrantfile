# -*- mode: ruby -*-
# vi: set ft=ruby :

#for testing
Vagrant.configure("2") do |config|

  config.vm.define "web" do |web|
    web.vm.box = "centos/7"
    web.vm.network "private_network", ip: "192.168.66.2"
  end

  config.vm.define "db" do |db|
    db.vm.box = "centos/7"
    db.vm.network "private_network", ip: "192.168.66.3"

  end

end
