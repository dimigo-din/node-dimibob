#!/usr/bin/env node

import program from 'commander'

program
  .version('1.0.0')
  .option('-y, --yesterday', 'Print yesterday dimigo meal information')
  .option('-b, --breakfast', 'Print breakfast information')
  .option('-l, --launch', 'Print luanch information')
  .option('-d, --dinner', 'Print dinner information')
  .option('-s, --snack', 'Print snack information')
  .option('-a, --all', 'Print every meal information today')

program.parse(process.argv)
