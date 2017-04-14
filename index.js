#!/usr/bin/env node

import program from 'commander'
import handler from './lib/option-handler'

program
  .version('1.0.0')
  .option('-t, --today', 'output today dimigo meal information. (default)', handler.today())
  .option('-b, --breakfast', 'output breakfast information.', handler.breakfast())
  .option('-l, --launch', 'output luanch information.', handler.lunch())
  .option('-d, --dinner', 'output dinner information.', handler.dinner())
  .option('-s, --snack', 'output snack information.', handler.snack())
  .option('-a, --all', 'output every meal information.', handler.all())

program.parse(process.argv)

handler.execute()
